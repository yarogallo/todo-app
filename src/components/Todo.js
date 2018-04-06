import React from 'react';
import '../style/App.css';

function Todo(props) {
	const {text, completed} = props.todo;
	return(
		<li className="todoLi text-muted col-12 text-left text-uppercase">
			<input type="checkbox" checked={ completed } className="app-checkbox"/>
			<label>{ text }</label>
		</li>
	);
}

export default Todo;
