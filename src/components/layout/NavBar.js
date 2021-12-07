import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
	static defaultProps = {
		title: 'GitHub Finder',
		icon: 'fab fa-github',
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div>
				<h1>
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</div>
		);
	}
}

export default NavBar;
