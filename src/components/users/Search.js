import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);

	const alertContext = useContext(AlertContext);
	const [text, setText] = useState('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			alertContext.setAlert('Please enter user search text ...', 'light');
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

export default Search;
