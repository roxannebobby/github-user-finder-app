import { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../../repos/Repos';

const User = ({
	user,
	loading,
	getUser,
	getRepos,
	getUserRepos,
	repos,
	match,
}) => {
	// the brackets at the end of the function mimics the componentDidMount from a class component
	useEffect(() => {
		getUser(match.params.login);
		// match.params is a react method that indicates pulling the info from the URL paramaters and using them somewhere (here we use .login paramater)
		getUserRepos(match.params.login);
		// the note below will allow you to remove the warning message pertaining the to empty bracket

		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		public_repos,
		following,
		public_gists,
		hireable,
		company,
	} = user;

	if (loading) return <Spinner />;

	return (
		<>
			<Link to='/' className='btn btn-light'>
				Back To Search
			</Link>
			Hireable:{' '}
			{hireable ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						style={{ width: '150px' }}
						alt=''
					/>
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>

				<div>
					{bio && (
						<>
							<h3>Bio</h3>
							<p>{bio}</p>
						</>
					)}
					<a href={html_url} className='btn btn-dark my-1'>
						Visit GitHub Profile
					</a>
					<ul>
						<li>
							{login && (
								<>
									<strong>Username:</strong> {login}
								</>
							)}
						</li>
						<li>
							{company && (
								<>
									<strong>Company:</strong> {company}
								</>
							)}
						</li>
						<li>
							{blog && (
								<>
									<strong>Website:</strong> {blog}
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</>
	);
};

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	getRepos: PropTypes.object.isRequired,
	getUserRepos: PropTypes.func.isRequired,
};

export default User;
