import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filters from './Filters';
import '../style/App.css';
import {visibilityFilters} from '../actions';

class App extends Component {
  render() {
    return (
      <section className="container border bg-light margin-top">
        <header className="row  header margin-top">
          <h1 className="col-12 text-uppercase text-danger font-weight-light text-center">My To Do List</h1>
        </header>
          <AddTodo/>
          <TodoList visibilityFilters={visibilityFilters}/>
          <Filters visibilityFilters={visibilityFilters}/>  
      </section>
    );
  }
}

export default App;
