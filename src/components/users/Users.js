import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// now users and loading are being passed in directly as props, so we no longer need this.props infront of the map method
const Users = () => {
	const githubContext = useContext(GithubContext);
	// destructure so we don't have to change any of the variables below with githubContext.
	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-3'>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

export default Users;

// we use this.props.users below because the users are now coming in as props from the App state for users, which fetches from the axios call; also, now that this no longer has state, changing it to a functional component; old class component code below

// class Users extends Component {
// 	render() {
// 		return (
// 			<div className='grid-3'>
// 				{this.props.users.map((user) => (
// 					<UserItem key={user.id} user={user} />
// 				))}
// 			</div>
// 		);
// 	}
// }
