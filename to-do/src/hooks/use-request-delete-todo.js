export const useRequestDeleteTodo = (refreshFlag) => {
	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then(() => refreshFlag())
	};

	return {
		deleteTodo
	};
};
