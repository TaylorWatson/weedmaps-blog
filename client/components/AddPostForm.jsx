import React, { Component } from 'react';


export default class AddPostForm extends Component {



	addBlogPost(event) {
		event.preventDefault();
		let params = {
			title:this.refs.title.value.trim(),
			description:this.refs.description.value.trim()};
		Meteor.call('addPost', params, () => {
			this.refs.title.value = "";
			this.refs.description.value = "";
		});
	}

	render() {
		return(
			<form onSubmit={this.addBlogPost.bind(this)}>
				<input
					type='text'
					ref='title'
					placeholder='Title' />
				<br />
				<input type='textarea'
					rows='4'
					ref='description'
					placeholder='description' />
				<br />
				<button value='submit'>{ this.props.name }</button>
			</form>
		)
	}
}