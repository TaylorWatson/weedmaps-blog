import React, { Component } from 'react';


export default class AddPostForm extends Component {

	constructor() {
		super();
		this.state = {
			onSub: this.addPost.bind(this)
		}
	}

	componentDidMount() {
		if (this.props.name == 'Edit Post')
		{
			this.setState({ onSub: this.updatePost.bind(this)})
		}
	}

	addPost(event) {
		event.preventDefault();
		let params = {
			title:this.refs.title.value.trim(),
			description:this.refs.description.value.trim()};
		Meteor.call('addPost', params, () => {
			this.refs.title.value = "";
			this.refs.description.value = "";
		});
	}

	updatePost(event) {
		event.preventDefault();
		let params = {
			_id: this.props.post._id,
			title: this.refs.title.value.trim(),
			description: this.refs.description.value.trim(),
			userId: this.props.post.userId
		};
		Meteor.call('updatePost', params, () => {
			this.refs.title.value = "",
			this.refs.description.value = ""
		} );
	}

	render() {
		return(
			<form onSubmit={ this.state.onSub }>
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