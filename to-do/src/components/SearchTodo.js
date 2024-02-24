import { useState } from 'react';

export const SearchTodo = ({ todosList }) => {
	const [searchValue, setSearchValue] = useState('');

	const onSearchChange = ({ target }) => {
		setSearchValue(target.value);
	};

	const onSearchSubmit = () => {
		const filteredTodos = todosList.filter((todo) =>
			todo.title.toLowerCase().includes(searchValue.toLowerCase()),
		);

		console.log(filteredTodos);
	};

	return (
		<div className="Search-wrapper">
			<form onSubmit={onSearchSubmit}>
				<input
					name="search"
					type="text"
					placeholder="Поиск"
					value={searchValue}
					onChange={onSearchChange}
				/>
				<button type="submit">Найти</button>
			</form>
		</div>
	);
};
