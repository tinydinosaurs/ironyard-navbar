import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

console.log('ice cream!');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Home} />
		<Route path='/register' component={Register} />
		<Route path='/login' component={Login} />
		<Route path='/dashboard' component={Dashboard} />
	</Router>, 
	document.querySelector('main')
	);