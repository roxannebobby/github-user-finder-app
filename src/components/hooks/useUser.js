import { useState } from 'react';

const useUser = () => {
	const [users, setUser] = useState([]);

	return [users, setUser];
};
export default useUser;
