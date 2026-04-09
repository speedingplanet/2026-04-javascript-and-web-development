import './movies.css';
import { dao } from './movies-dao';
import { renderMoviesAsGrid } from './render-movies';

async function init() {
	try {
		let moviesContainer = document.querySelector('#movies-container');
		let movies = await dao.fetchMovies();
		let renderedMovies = renderMoviesAsGrid(movies);
		// let renderedMovies = renderMoviesAsTable(movies);
		let header = document.createElement('h1');
		header.textContent = 'List of our favorite movies';
		moviesContainer.append(header, renderedMovies);
	} catch (err) {
		console.error(err);
	}
}

init();
