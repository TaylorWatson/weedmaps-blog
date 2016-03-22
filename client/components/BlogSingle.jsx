import React, { Component } from 'react';

export default class BlogSingle extends Component {

	render() {

		return(
			<div>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.description}</p>
				<p>{this.props.post.createdAt.toString().slice(4,15)}</p>
				<p>{ this.props.post.username }</p>
			</div>
		)
	}

}