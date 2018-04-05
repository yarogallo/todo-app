import React, { Component } from 'react';
import TodoList from './TodoList';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className="container border bg-light margin-top">
        <header className="row  header margin-top">
          <h1 className="col-12 text-uppercase text-danger font-weight-light text-center">My To Do List</h1>
        </header>
        <div className="row margin-top">
          <TodoList/>
        </div>
        <div className="row d-flex justify-content-center margin-top margin-bottom">
				  <button className="app-button btn btn-outline-danger text-uppercase">Add To Do</button>
			  	<button className="app-button btn btn-outline-danger text-uppercase">Toggle Visibility</button>
			  </div>
      </section>
    );
  }
}

export default App;
