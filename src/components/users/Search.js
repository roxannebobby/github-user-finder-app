import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			setAlert('Please enter search text ...', 'light');
		} else {
			githubContext.searchUsers(text);
			// below code clears after sending
			setText('');
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='Search for a User...'
					value={text}
					onChange={onChange}
				/>

				<input
					type='submit'
					className='btn btn-dark btn-block'
					name='submit'
					value='Search'
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default Search;
