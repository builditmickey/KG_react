import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, handleDeleteItem }) => {
	return (
		<>
			<div className={styles.itemsContainer}>
				{todoItems.map((item) => (
					<TodoItem
						key={item.name}
						todoName={item.name}
						todoDate={item.dueDate}
						handleDeleteItem={handleDeleteItem}
					/>
				))}
			</div>
		</>
	);
};

export default TodoItems;
