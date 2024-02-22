import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [todosList, setTodosList] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((todos) => setTodosList(todos));
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className="App-header_name">Список ваших задач</div>
				<div className="App-list">
					{todosList.map(({ id, title, complete }) => (
						<div key={id} className="App-todo">
							<div className="App-todo_title">{title}</div>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
