async function fetchMovies() {
	try {
		let response = await fetch('http://localhost:8000/movies');
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw new Error('Bad HTTP response:' + response.status);
		}
	} catch (error) {
		console.error('Error retrieving movies:', error);
		throw new Error('Could not get movies');
	}
}

export const dao = {
	fetchMovies,
};
