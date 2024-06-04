import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onNewItem }) {
	const [todoName, setTodoName] = useState();
	const [dueDate, setDueDate] = useState();

	const handleNameChange = (e) => {
		setTodoName(e.target.value);
	};

	const handleDateChange = (e) => {
		setDueDate(e.target.value);
	};

	const handleAddClicked = () => {
		onNewItem(todoName, dueDate);
		setTodoName("");
		setDueDate("");
	};

	return (
		<div className="container">
			<div className="row kg-row">
				<div className="col-4">
					<input
						type="text"
						placeholder="Enter Todo here"
						value={todoName}
						onChange={handleNameChange}
					/>
				</div>
				<div className="col-4">
					<input type="date" onChange={handleDateChange} value={dueDate} />
				</div>
				<div className="col-2">
					<button
						type="button"
						className="btn btn-success kg-button"
						onClick={handleAddClicked}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddTodo;
