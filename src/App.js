import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	// using this.state because this is a class component
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<div className='App'>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}
export default App;
