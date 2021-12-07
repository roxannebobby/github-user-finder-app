import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
	// global state for anything that has to do with users
	const initialState = null;

	// to dispatch to our reducer
	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// set alert
	const setAlert = (msg, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type },
		});
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};
export default AlertState;
