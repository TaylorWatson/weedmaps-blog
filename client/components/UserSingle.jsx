import React, { Component } from 'react';


export default class UserSingle extends Component {

	render() {

		return(
			<li>
			{ this.props.user.username }
			</li>
		)
	}
}