// react elments
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
// styles
import './App.css';
// pages
import About from './components/pages/About';
// layout components
import NavBar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
// user components
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
// state components
import GithubState from './context/github/GithubState';

const App = () => {
	// all this is moved to githubState
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	// search github user --  moved to GithubState.js

	//get single github users -- moved to githubState.js

	// get user repos
	const getUserRepos = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setRepos(res.data);
		setLoading(false);
	};

	// clear users -- moved to githubState.js

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<nav className='navbar bg-primary'>
						<NavBar />
					</nav>
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<>
										<Search setAlert={showAlert} />
										<Users />
									</>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<User {...props} getUserRepos={getUserRepos} repos={repos} />
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
