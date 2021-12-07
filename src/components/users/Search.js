import React, { Component } from 'react';

class Search extends Component {
	// whenever we have a form, we need to have some sort of state for any of the form fields that will be changed by the user; 'text' below is a 'slice of state' we want to monitor
	state = {
		text: '',
	};

	// here we are creating a change event; every time the text input in the form changes (someone types in something) we can capture that event through the DOM (e.target.value); the e captures each individual event change that happens

	// the below text is for only one field; the actual code below being used is when we have more than one field
	// onChange = (e) => {
	// 	this.setState({ text: e.target.value });
	// };

	//this code accounts for more than one input field; the e.target.name specifies each input field name, and the e.target.value captures the value for that particular field
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// the below code is required in order to give action to the form's submit button; this.onSubmit is added to the form code below; if we do not use an arrow function here, we have to 'bind' the 'this' keyword before it will work, so use arrow functions to make it easier
	// additionally, the 'this' is needed because this is a class component
	onSubmit = (e) => {
		e.preventDefault();
		// here we have to pass the value that is return upon submit (this.state.text) UP to the App component through props
		// code below will send the state.text to a method called searchUsers; this prop sending UP (prop drilling) is why using Context and Hooks is a better method

		// the process is this -- in the form, onSubmit calls on the method onSubmit (this method), in this method we are using the 'prop' of searchUsers, which we added on App.js inside the <Search />, and we pass this the content of this.state.text from the Search component, once passed to the App.js component, it calls another moethod (searchUsers) which uses the this.state.text content as a prop inside that method
		this.props.searchUsers(this.state.text);
		// below code clears after sending
		this.setState({ text: '' });
	};

	render() {
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='text'
						placeholder='Search for a User...'
						value={this.state.text}
						onChange={this.onChange}
					/>

					<input
						type='submit'
						className='btn btn-dark btn-block'
						name='submit'
						value='Search'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
