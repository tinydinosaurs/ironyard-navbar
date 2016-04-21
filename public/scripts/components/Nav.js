import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import user from '../models/user';
import {hashHistory} from 'react-router';


export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},

	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	render: function() {
		if(this.state.user.get('id')) {
			return (<nav>
			<Link to='/'>home</Link>&nbsp;
			<Link to='/dashboard'>dashboard</Link>&nbsp;
			<a href="#" onClick={this.logout}>logout</a>
		</nav>);
		} else {
		return (<nav>
			<Link to='/'>home</Link>&nbsp;
			<Link to='/register'>register</Link>&nbsp;
			<Link to='/login'>login</Link>&nbsp;
		</nav>);
		}
	},

	logout: function(e) {
		e.preventDefault();
		console.log('you can never leave');
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: 'auth/logout'
		});
		hashHistory.push('/');
	}
});



