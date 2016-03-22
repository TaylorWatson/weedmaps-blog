import React, { Component } from 'react';


export default class UserSingle extends Component {

	render() {

		return(
			<li>
				<a href={`/user/${this.props.user.username}`}>
					Checkout: { this.props.user.username }'s Blog!
				</a>
			</li>
		)
	}
}