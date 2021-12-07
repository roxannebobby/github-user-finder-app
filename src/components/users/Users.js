import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		users: [
			{
				id: '1',
				login: 'Jmz0127',
				avatar_url: 'https://avatars.githubusercontent.com/u/45496047?v=4',
				html_url: 'https://github.com/Jmz0127',
			},
			{
				id: '2',
				login: 'morvin1',
				avatar_url: 'https://avatars.githubusercontent.com/u/45055471?v=4',
				html_url: 'https://github.com/morvin12',
			},
			{
				id: '3',
				login: 'MaryAngelique',
				avatar_url: 'https://avatars.githubusercontent.com/u/51681480?v=4',
				html_url: 'https://github.com/MaryAngelique',
			},
		],
	};

	render() {
		return (
			<div>
				{this.state.users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

export default Users;
