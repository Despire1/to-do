import { useState } from 'react';

export const useRequestAddTodo = (refreshFlag) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = (title) => {
		setIsCreating(true);

		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: title,
				complete: false,
			}),
		})
			.then(() => refreshFlag())
			.finally(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddTodo,
	};
};
