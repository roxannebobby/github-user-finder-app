// react elments
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import AlertState from './context/alert/AlertState';

const App = () => {
	// all state moved to GithubState and AlertState

	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<nav className='navbar bg-primary'>
							<NavBar />
						</nav>
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => (
										<>
											<Search />
											<Users />
										</>
									)}
								/>
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
