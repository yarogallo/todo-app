import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


function AddTodo({ onAddTodo }) {
	const inputRef = React.createRef();
	
	const handleSubmit = evt => {
		const inputValue = inputRef.current.value;
		
		!!inputValue && onAddTodo(inputValue);
		inputRef.current.value = '';
		evt.preventDefault();
	};
		
	return (
		<div>
			<form onSubmit={evt => handleSubmit(evt)} className="input-group mb-3">
				<input ref={inputRef} type="text" className="form-control" placeholder="enter new todo"/>
  				<div className="input-group-prepend">
    				<button className="btn btn-danger" type="button" onClick={evt => handleSubmit(evt)}>Add to do</button>
  				</div>
			</form>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		onAddTodo: (text) => {
			dispatch(addTodo(text));
		}
	};
}

export default connect(null, mapDispatchToProps)(AddTodo);