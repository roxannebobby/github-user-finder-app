import { useState } from 'react';

const useAlert = () => {
	const [alert, setAlert] = useState(null);

	return [alert, setAlert];
};
export default useAlert;
