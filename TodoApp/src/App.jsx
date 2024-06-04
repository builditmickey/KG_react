import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
	const initialTodoItems = [
		{
			name: "Buy Milk",
			dueDate: "25/5/2024",
		},
		{
			name: "Buy Curd",
			dueDate: "25/5/2024",
		},
	];

	const [todoItems, setTodoItems] = useState(initialTodoItems);

	const handleNewItem = (itemName, itemDueDate) => {
		const newTodoItems = [
			...todoItems,
			{ name: itemName, dueDate: itemDueDate },
		];
		setTodoItems(newTodoItems);
	};

	return (
		<center className="todo-container">
			<AppName />
			<AddTodo onNewItem={handleNewItem} />
			<TodoItems todoItems={todoItems} />
		</center>
	);
}

export default App;
