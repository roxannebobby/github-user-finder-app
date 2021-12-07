import { useState } from 'react';

const useRepos = () => {
	const [repos, setRepos] = useState([]);

	return [repos, setRepos];
};
export default useRepos;
