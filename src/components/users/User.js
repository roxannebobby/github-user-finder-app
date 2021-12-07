import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../../repos/Repos';

class User extends Component {
	// this will bring our props in but also the match.params.login will ensure that we are capturing the login info from the URL and using that to bring in only data for that login
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
		getRepos: PropTypes.object.isRequired,
		getUserRepos: PropTypes.func.isRequired,
	};
	render() {
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
		} = this.props.user;

		const { loading, repos } = this.props;

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
	}
}

export default User;
