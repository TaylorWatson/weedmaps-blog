import React, { Component } from 'react';


export default class UserSingle extends Component {

	render() {

		return(
			<div className='singlePost'>
				<a href={`/user/${this.props.user.username}`}>
					<h2>Checkout: { this.props.user.username }'s Blog!</h2>
				</a>
		</div>
		)
	}
}
