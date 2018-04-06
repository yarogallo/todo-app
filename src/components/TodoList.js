import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';



function TodoList({todos, onTodoClick}) {
	return (
		<div className="row margin-top">
			<ul className="todo-list col-12 ">
			{todos.map(todo => (
				<li 
					className="text-muted text-left text-uppercase"
					key={todo.index}
					style={{
						textDecoration: todo.completed ? 'line-through' : 'none'
					}}
					onClick={ () => {
						onTodoClick(todo.index);
					}}>
					{todo.text}
				</li>))}
			</ul>
		</div>
	);
}

function getVisiblesTodos(todos, filter, allFilters) {
	switch (filter) {
		case allFilters.SHOW_ALL:
			return [...todos];
		case allFilters.SHOE_ACTIVE:
			return todos.filter( todo => !todo.completed );
		case allFilters.SHOW_COMPLETED: 
			return todos.filter( todo => todo.completed);		
		default:
			return todos;
	}
}

function mapStateToProps({ todos, visibilityFilter }, { visibilityFilters }) {
	return {
		todos: getVisiblesTodos( todos, visibilityFilter, visibilityFilters )
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onTodoClick: (index) => { dispatch(toggleTodo(index)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
