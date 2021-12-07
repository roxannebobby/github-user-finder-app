import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ icon, title }) => {
	return (
		<div>
			<h1>
				<i className={icon} /> {title}
			</h1>
		</div>
	);
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
	title: 'GitHub Finder',
	icon: 'fab fa-github',
};

export default NavBar;
