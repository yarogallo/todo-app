import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './style/index.css';
import App from './components/App';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
	<App store={store}/>, 
	document.getElementById('root'));

