import './App.css';
import { useState, useEffect } from 'react';
import { AddForm } from './components/AddForm';
import { useRequestDeleteTodo } from './hooks';
import { ReactComponent as BasketIcon } from './components/BasketIcon.svg';
import { ReactComponent as PenIcon } from './components/PenIcon.svg';
import { ModalRename } from './components/ModalRename';
import { SearchTodo } from './components/SearchTodo';

function App() {
	const [todosList, setTodosList] = useState([]);
	const [updateFlag, setUpdateFlag] = useState(false);
	const refreshFlag = () => setUpdateFlag(!updateFlag);
	const { deleteTodo } = useRequestDeleteTodo(refreshFlag);
	const [isModal, setIsModal] = useState(false);
	const [currentId, setCurrentId] = useState(null);

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
					<SearchTodo todosList={todosList} />
				</div>
				<div className="App-list">
					{todosList.map(({ id, title, complete }) => (
						<div key={id + '1'} className="App-todo">
							<div key={id} className="App-todo_title">
								{title}
							</div>
							<div className='App-buttons_block'>
								<div
									className="App-change"
									onClick={() => {
										setIsModal(!isModal);
										setCurrentId(id);
									}}
								>
									<PenIcon />
								</div>
								<div className="App-delete" onClick={() => deleteTodo(id)}>
									<BasketIcon />
								</div>
							</div>
						</div>
					))}
					{isModal && <ModalRename id={currentId} />}
				</div>
			</header>
		</div>
	);
}

export default App;
