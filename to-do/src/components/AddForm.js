import { useState } from "react";
import { useRequestAddTodo } from '../hooks';


export const AddForm = ({refreshFlag}) => {
	const { requestAddTodo, isCreating } = useRequestAddTodo(refreshFlag);

	const [inputValue, setInputValue] = useState('');

	const onSubmit = (e) => {
		e.preventDefault()
		requestAddTodo(inputValue)
		console.log(isCreating)
	}

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input name="todo" type="text" value={inputValue} onChange={onInputChange} />
			<button type="submit" className="App-add_button" disabled={isCreating}>
				Добавить
			</button>
		</form>
	);
};
