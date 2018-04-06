export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOE_ACTIVE: 'SHOW_ACTIVE'
};


//actions creators 

function addTodo( text ) {
	return {
		type: ADD_TODO,
		text: text
	};
}

function toggleTodo( index ) {
	return {
		type: TOGGLE_TODO,
		index: index
	};
}

function setVisibilityFilter( filter ) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter: filter
	};
}

export { addTodo, toggleTodo, setVisibilityFilter };
