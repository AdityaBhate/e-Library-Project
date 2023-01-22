import { useState } from "react";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

// const props = {
// 	name: "file",
// 	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
// 	headers: {
// 		authorization: "authorization-text",
// 	},
// 	onChange(info) {
// 		if (info.file.status !== "uploading") {
// 			console.log(info.file, info.fileList);
// 		}
// 		if (info.file.status === "done") {
// 			message.success(`${info.file.name} file uploaded successfully`);
// 		} else if (info.file.status === "error") {
// 			message.error(`${info.file.name} file upload failed.`);
// 		}
// 	},
// };

// const App = () => (
// 	<Upload {...props}>
// 	<Button icon={<UploadOutlined />}>Click to Upload</Button>
// 	 </Upload>
// );

function App() {
	const [file, setFile] = useState();
	const [name, setName] = useState();
	const [category, setCategory] = useState();
	const [subject, setSubject] = useState();
	let uploadedBy = "test admin";
	const [author, setAuthor] = useState();
	const [recommendedYear, setRecommendedYear] = useState();

	/**name: {
        type: String
    },
    category: {
        type: String
    },
    subject: {
        type: String
    },
    uploadedBy: {
        type: String
    },
    author: {
        type: String
    },
    recommendedYear: {
        type: Number
    }, */

	function handleFileChange(event) {
		setFile(event.target.files[0]);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const url = "http://localhost:3001/content/upload";
		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", name);
		formData.append("category", category);
		formData.append("subject", subject);
		formData.append("uploadedBy", uploadedBy);
		formData.append("author", author);
		formData.append("recommendedYear", recommendedYear);

		axios.post(url, formData).then((response) => {
			console.log(response.data);
		});
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h1>File Upload</h1>
				<label>Name</label>
				<input type='text' onChange={(e) => setName(e.target.value)} />
				<label>Category</label>
				<input type='text' onChange={(e) => setCategory(e.target.value)} />
				<label>subject</label>
				<input type='text' onChange={(e) => setSubject(e.target.value)} />
				<label>author</label>
				<input type='text' onChange={(e) => setAuthor(e.target.value)} />
				<label>recommendedYear</label>
				<input
					type='number'
					onChange={(e) => setRecommendedYear(e.target.value)}
				/>
				<label>File</label>
				<input type='file' onChange={handleFileChange} />
				<button type='submit'>Upload</button>
			</form>
		</>
	);
}

export default App;
