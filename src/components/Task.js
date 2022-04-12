import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const Task = ({ id, description, isDone }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	};
	const isDoneTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}
	

	return (
		<li className="task-item">
			<div>
				{description}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					isDoneTask();
				}}>isDone</button>
			</div>
		</li>
	);
};

export default Task;
