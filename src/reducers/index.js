import { combineReducers } from 'redux';
import { visibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../actions';


const initialTodos = [
	{text: 'study react', completed: true, index: 0},
	{text: 'study redux', completed: false, index: 1},
	{text: 'study react-redux', completed: true, index: 2},
	{text: 'study get a job', completed: false, index: 3},
];
  
//only todos part of the state
function todos(state=initialTodos, action) {
	
	switch (action.type) {
		
		case ADD_TODO:
			return[...state,
			{
				text: action.text,
				completed: false,
				index: action.index
			}];
		
		case TOGGLE_TODO: 
			return state.map(todo => {
				if(action.index === todo.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					});
				}
				return todo;
			});	
	
		default:
			return state;
	}
}

function visibilityFilter( state = visibilityFilters.SHOW_ALL, action) {
	
	switch (action.type) {
		
		case SET_VISIBILITY_FILTER:
			
			return action.filter;
	
		default:
			return state;
	}
}

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;

