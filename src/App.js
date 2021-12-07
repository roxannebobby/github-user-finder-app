// react elments
import { useState, setState } from 'react';
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
import useLoading from './components/hooks/useLoading';

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useLoading(false);
	const [alert, setAlert] = useState(null);

	// search github user
	const searchUsers = async (text) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUsers(res.data.items);
		setLoading(false);
	};

	//get single github users
	const getUser = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUser(res.data);
		setLoading(false);
	};

	// get user repos
	const getUserRepos = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setRepos(res.data);
		setLoading(false);
	};

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const setUserAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 5000);
	};

	return (
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
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={users.length > 0 ? true : false}
										setAlert={setUserAlert}
									/>
									<Users loading={loading} users={users} />
								</>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<User
									{...props}
									getUser={getUser}
									getUserRepos={getUserRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
