import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<nav className='navbar bg-primary'>
					<NavBar />
				</nav>
				<div className='container'>
					<Users />
				</div>
			</div>
		);
	}
}
export default App;
