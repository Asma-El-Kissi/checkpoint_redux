import React from 'react';
import Task from './Task';
import { useSelector } from "react-redux";

const ListTask = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<Task id={todo.id} description={todo.name} isDone={todo.status} />
			))}
		</ul>
	);
};

export default ListTask;
