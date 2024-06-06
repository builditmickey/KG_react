import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
	const [todoItems, setTodoItems] = useState([]);

	const handleNewItem = (itemName, itemDueDate) => {
		const newTodoItems = [
			...todoItems,
			{ name: itemName, dueDate: itemDueDate },
		];
		setTodoItems(newTodoItems);
	};

	const handleDeleteItem = (todoItemName) => {
		const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
		setTodoItems(newTodoItems);
	};

	return (
		<center className="todo-container">
			<AppName />
			<AddTodo onNewItem={handleNewItem} />
			{todoItems.length === 0 && <WelcomeMsg />}
			<TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
		</center>
	);
}

export default App;
