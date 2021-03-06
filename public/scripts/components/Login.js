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
			<h1>log in!</h1>
			<form onSubmit={this.login}>
				<input type="text" placeholder="email" ref="email" />
				<div className='error'>{this.state.errors.email ? this.state.errors.email.message : null}</div>
				<input type="password" placeholder="password" ref="password" />
				<div className='error'>{this.state.errors.password ? this.state.errors.password.message : null}</div>
				<button type="submit">log in!</button>
			</form>
		</section>
		);
	},
	login: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},

			headers: {
				Accept: 'application/json'
			},

			success: (loggedin) => {
				this.state.user.set(loggedin);
				hashHistory.push('/dashboard');
			},

			error: (errorArg) => {
				console.log(this.state);
				this.setState({errors: errorArg.responseJSON});
			}

		});
	}
});