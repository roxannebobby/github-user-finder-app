import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// now users and loading are being passed in directly as props, so we no longer need this.props infront of the map method
const Users = ({ users, loading }) => {
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

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
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
