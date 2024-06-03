import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
	const [calVal, setCalVal] = useState("");

	const onButtonClick = (btn) => {
		if (btn === "C") {
			setCalVal("");
		} else if (btn === "=") {
			setCalVal(eval(calVal));
		} else {
			setCalVal(calVal + btn);
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<Display displayValue={calVal} />
				<ButtonsContainer onButtonClick={onButtonClick} />
			</div>
		</>
	);
}

export default App;
