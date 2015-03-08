(function() {
	'use strict';

	var React = require('react');
	var PrimaryButton = require('../primary-button/PrimaryButton.jsx');

	var Controlbar = React.createClass({

		getInitialState: function() {
			return {
				loggedIn: false
			}
		},

		componentDidMount: function () {
			var self = this;
			$.get('http://private-20206-kanon.apiary-mock.com/authorized', function(data) {
				self.setState({loggedIn: data.authorized});
				console.log(self.state);
			});
		},

		render: function() {
			var rightGroup;

			rightGroup = !this.state.loggedIn ? (
				<ul className="right-controlbar-group">
					<li><a href="login">Login</a></li>
				</ul>
			) : (
				<ul className="right-controlbar-group">
					<li><a href="logout">Logout</a></li>
				</ul>
			);

			console.log(rightGroup);

			return (
				<nav id="controlbar">
					<div className="controlbar-wrapper">
						<a href="#" className="brand-logo">Kanon</a>
						{rightGroup}
					</div>
				</nav>
			);
		}
	});

	module.exports = Controlbar;

}());