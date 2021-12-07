import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	// using this.state because this is a class component
	// once we have added our searchUsers method below, this code is no longer needed as all it does is display a random 30 users from a github call

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	this.setState({ users: res.data, loading: false });
	// }

	// below we have drilled UP this.state.text (which is a component-level state) from the Search.js page and so we refer to this "prop" as 'text' so we can complete the code needed to change the text state

	// to search users now, we make a call to the github search/users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	// clear users from state; this also works from drilling props UP from the search component

	// the showClear prop added to <Search /> below is a ternary used to only show the clear button IF the length of the state of users is greater than 0

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// set the Alert that is triggered in the Search.js component; prop values are coming from the Search.js component
	setAlert = (msg, type) => {
		// we added a new slice of state about called alert, so now we will set a new state when this method is called, and it will put the message text into msg and the type style into type

		this.setState({ alert: { msg: msg, type: type } });
	};

	render() {
		const { users, loading } = this.state;

		return (
			<div className='App'>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<Alert alert={this.state.alert} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
