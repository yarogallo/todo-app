import React from 'react';
import '../style/App.css';

function Todo( { text, completed }) {
	text = "learn react and redux";
	return(
		<li className="todoLi text-muted col-12 text-center text-uppercase">
			<input type="checkbox" checked={ completed } className="app-checkbox"/>
			<label>{ text }</label>
		</li>
	);
}

export default Todo;
