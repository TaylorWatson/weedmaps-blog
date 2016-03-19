import React, { Component } from 'react';


export default class AddPostForm extends Component {

	addBlogPost(event) {
		event.preventDefault();
		var title = this.refs.title.value.trim();
		var description = this.refs.description.value.trim();
		var user;
		Posts.insert({
			title: title,
			description: description,
			createdAt: new Date()
		});
	}


	render() {

		return(
			<form className='blog-form' onSubmit={this.addBlogPost.bind(this)}>
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
				<button value='submit'>Add Post</button>
			</form>
		)
	}

}