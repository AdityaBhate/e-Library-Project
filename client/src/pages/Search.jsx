import { useState } from "react";
import axios from "axios";

function Search() {
	const [searchName, setSearchName] = useState();
	const [searchSubject, setSearchSubject] = useState();
	const [searchCategory, setSearchCategory] = useState();
	function handleSearchSubmit(event) {
		event.preventDefault();
		axios
			.get(
				`http://localhost:3001/search?name=${searchName}&subject=${searchSubject}&category=${searchCategory}`
			)
			.then((res) => console.log(res.data));
	}
	return (
		<div>
			<form onSubmit={handleSearchSubmit}>
				<input
					type='text'
					placeholder='search by name...'
					onChange={(e) => setSearchName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='add subject...'
					onChange={(e) => setSearchSubject(e.target.value)}
				/>
				<input
					type='text'
					placeholder='add category...'
					onChange={(e) => setSearchCategory(e.target.value)}
				/>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
}

export default Search;
