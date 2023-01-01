import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
	const [file, setFile] = useState();
	const [subject, setSubject] = useState();
	const [category, setCategory] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("file", file.data);
		formData.append("subject", subject);
		formData.append("category", category);
		console.log(formData);

		axios
			.post("http://localhost:3001/content/upload", formData)
			.then((res) => console.log(res.data));
	};

	const handleFileChange = (e) => {
		const file = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setFile(file);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='file' name='file' onChange={handleFileChange}></input>
				<input
					type='text'
					name='category'
					value={category}
					onChange={(e) => setCategory(e.target.value)}></input>
				<input
					type='text'
					name='subject'
					value={subject}
					onChange={(e) => setSubject(e.target.value)}></input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default Test;
