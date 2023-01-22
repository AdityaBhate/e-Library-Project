import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
