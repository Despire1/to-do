import { useState } from 'react';

export const ModalRename = ({ id }) => {
	const [renameValue, setRenameValue] = useState('');

	const onRenameChange = ({ target }) => {
		setRenameValue(target.value);
	};

	const onRenameSubmit = () => {
		console.log(id);

		// fetch(`http://localhost:3005/todos/${id}`, {
		// 	method: 'PUT',
		// 	headers: { 'Content-Type': 'application/json;charset=utf-8' },
		// 	body: JSON.stringify({
		// 		title: renameValue,
		// 		complete: false,
		// 	}),
		// });
	};

	return (
		<div className="Modal-wrapper">
			<p className="Modal-title">Новое название дела</p>
			<form onSubmit={onRenameSubmit}>
				<input
					name="rename"
					type="text"
					value={renameValue}
					onChange={onRenameChange}
				/>
				<button className="Modal-rename_button" type="submit">
					Изменить
				</button>
			</form>
		</div>
	);
};
