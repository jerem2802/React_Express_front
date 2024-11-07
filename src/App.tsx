import "./App.css";

import { useState } from "react";
import EmployeeCards from "./EmployeeCards";
const sampleEmployee = {
	name: {
		first: "",
		last: "",
	},
	email: "",
	picture: {
		medium: "",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		// Send the request
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			})

			// pour tester le .catch

			.catch((error) => console.error(error));
	};

	return (
		<div className="App">
			<EmployeeCards employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
