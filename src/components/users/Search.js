import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useText from '../hooks/useText';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	const [text, setText] = useText('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			setAlert('Please enter search text ...', 'light');
		} else {
			searchUsers(text);
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
			{showClear && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
