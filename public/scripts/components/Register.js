import React from 'react';
import Nav from './Nav';
import $ from 'jquery';
import user from '../models/user';
import {hashHistory} from 'react-router';


export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},

	render: function() {
		return(
			<section>
			<Nav />
			<h1>register!</h1>
			<form onSubmit={this.register}> 
				<input type="text" placeholder="first name" ref="firstName" />
				<input type="text" placeholder="last name" ref="lastName" />
				<input type="text" placeholder="email" ref="email"/>
				<input type="password" placeholder="password" ref="password" />
				<button type="submit">register!</button>
			</form>
		</section>
		);
	},
	register: function(e) {
		e.preventDefault();
		// console.log(this.refs.email.value);
		// console.log('ha! this just a log to the console. you haven\'t registered for ANYTHING!');
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value
			},
			headers: {
				Accept: 'application/json'
			}, 

			success: (registered) => {
				// console.log('ok, now you\'ve actually registered!');
				// console.log(this.state.user);
				this.state.user.set(registered);
				hashHistory.push('/dashboard');

			},
			error: (errorArg) => {
				console.log('nice try, jerk');
				console.log(errorArg);
				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});