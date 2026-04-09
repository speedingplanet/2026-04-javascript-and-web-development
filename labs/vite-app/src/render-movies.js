let defaultHeaders = ['title', 'year', 'rating', 'genres'];

export function renderMoviesAsGrid(movies, columns = defaultHeaders) {
	let gridContainer = document.createElement('div');
	let gridHeaderRow = document.createElement('div');
	gridHeaderRow.classList.add('movie-row');
	for (let column of columns) {
		gridHeaderRow.insertAdjacentHTML('beforeend', `<div class="movie-element">${column}</div>`);
	}
	gridContainer.append(gridHeaderRow);

	let gridRows = [];
	for (let movie of movies) {
		let gridRow = document.createElement('div');
		gridRow.classList.add('movie-row');
		for (let column of columns) {
			if (column !== 'rating') {
				gridRow.insertAdjacentHTML(
					'beforeend',
					`<div class="movie-element"><span>${movie[column]}</span></div>`
				);
			} else {
				let ratingString = '⭐️'.repeat(movie.rating);
				gridRow.insertAdjacentHTML(
					'beforeend',
					`<div class="movie-element"><span>${ratingString}</span></div>`
				);
			}
		}
		gridRows.push(gridRow);
	}
	gridContainer.append(...gridRows);
	return gridContainer;
}

export function renderMoviesAsTable(movies, columns = defaultHeaders) {
	let table = document.createElement('table');
	let tableHeader = document.createElement('thead');
	let tableBody = document.createElement('tbody');

	table.append(tableHeader, tableBody);

	let tableHeaderRow = document.createElement('tr');
	tableHeader.append(tableHeaderRow);

	for (let column of columns) {
		tableHeaderRow.insertAdjacentHTML('beforeend', `<th>${column}</th>`);
	}

	for (let movie of movies) {
		let tableBodyRow = document.createElement('tr');
		let rowFields = '';
		for (let column of columns) {
			rowFields += `<td>${movie[column]}</td>`;
		}
		tableBodyRow.insertAdjacentHTML('beforeend', rowFields);
		tableBody.append(tableBodyRow);
	}

	return table;
}
