import { useEffect, useState } from "react";
import "./styles/App.css";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3005/api/data")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);
	return <></>;
}

export default App;
