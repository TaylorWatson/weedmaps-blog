import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AddPostForm extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				posts: Meteor.subscribe("userPosts")},
			onSubmit: this.addPost.bind(this)
		}
	}

	componentDidMount() {
		if (this.props.name == 'Edit Post')
		{
			this.setState({
				onSubmit: this.updatePost.bind(this),
				title: this.post().title,
				description: this.post().description
			})
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
			this.setState({
			title: '',
			description: ''
			});
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
		Meteor.call('updatePost', params);
		this.props.click();
	}

	handleTitleChange(event) {
		this.setState({
			title: event.target.value
		})
	}

	handleDescriptionChange(event) {
		this.setState({
			description: event.target.value
		})
	}

	componentWillUnmount() {
		this.state.subscription.posts.stop();
	}

	post() {
		return Posts.findOne({ _id: this.props.post._id }) || {current: 0, source: "loading"};
	}

	render() {
		return(
			<form>
				<input
					type='text'
					ref='title'
					value={ this.state.title }
					onChange={ this.handleTitleChange.bind(this) }
					placeholder='Title' />
				<br />
				<input type='textarea'
					rows='4'
					ref='description'
					value={ this.state.description }
					onChange={ this.handleDescriptionChange.bind(this) }
					placeholder='description' />
				<br />
				<button value='submit' onClick={ this.state.onSubmit }>{ this.props.name }</button>
			</form>
		)
	}
}