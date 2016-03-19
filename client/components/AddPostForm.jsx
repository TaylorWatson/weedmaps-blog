import React, { Component } from 'react';


export default class AddPostForm extends Component {

	addBlogPost(event) {
		event.preventDefault();
		options = {};
		options['title'] = this.refs.title.value.trim();
		options['description'] = this.refs.description.value.trim();
		let user;
		console.log(options);
		Meteor.call('addPost', options);
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