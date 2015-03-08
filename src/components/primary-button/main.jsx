'use strict';

var React = require('react');
var PrimaryButton = require('./PrimaryButton.jsx');

var TestButtons = React.createClass({
	render: function() {
		return (
			<div>
				<PrimaryButton label="Primary Button" onClick={function() {alert('click')}}/>
				<br/><br/>
				<PrimaryButton label="Primary Link Button" linkButton={true} onClick={function() {alert('click')}} />
			</div>
		);
	}
})

React.render(<TestButtons />, document.getElementById('container'));