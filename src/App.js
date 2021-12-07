// react elments
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// styles
import './App.css';
// pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
// layout components
import NavBar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
// user components
import User from './components/users/User';
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
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
