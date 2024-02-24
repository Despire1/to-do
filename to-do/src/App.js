import './App.css';
import { useState, useEffect } from 'react';
import { AddForm } from './components/AddForm';
import { useRequestDeleteTodo } from './hooks';
import { ReactComponent as BasketIcon } from './components/BasketIcon.svg';

function App() {
	const [todosList, setTodosList] = useState([]);
	const [updateFlag, setUpdateFlag] = useState(false);
	const refreshFlag = () => setUpdateFlag(!updateFlag);
	const { deleteTodo } = useRequestDeleteTodo(refreshFlag);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((todos) => {
				setTodosList(todos);
			});
	}, [updateFlag]);

	return (
		<div className="App">
			<header className="App-header">
				<div className="App-header_name">Список ваших задач</div>
				<div className="App-input_wrapper">
					<AddForm refreshFlag={refreshFlag} />
				</div>
				<div className="App-list">
					{todosList.map(({ id, title, complete }) => (
						<div key={id + '1'} className="App-todo">
							<div key={id} className="App-todo_title">
								{title}
							</div>
							<div className="App-delete" onClick={() => deleteTodo(id)}>
								<BasketIcon />
							</div>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
