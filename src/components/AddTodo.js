import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo({ onAddTodo }) {
	const inputRef = React.createRef();
	return (
		<div className="input-group mb-3">
		<input ref={inputRef} type="text" className="form-control" placeholder="enter new todo"/>
  			<div className="input-group-prepend">
    			<button className="btn btn-danger" type="button" onClick={() => {
					!!inputRef.current.value && onAddTodo(inputRef.current.value)
				}}>Add to do</button>
  			</div>
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