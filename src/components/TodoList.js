import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	const {todos} = props;
	return (
		<div className="col-12">
			<ul className="todo-list">
			{todos.map(todo => (<Todo key={todo.text} todo={todo}/>))}
			</ul>
		</div>
	);
}

export default TodoList;
