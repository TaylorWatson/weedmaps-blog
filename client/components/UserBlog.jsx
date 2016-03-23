import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import BlogSingle from './BlogSingle.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Posts = new Meteor.Collection('posts');

export default class UserBlog extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				posts: Meteor.subscribe("allPosts")},
			createPost:  <div></div>
		}
	}

	componentDidMount() {
		if (Meteor.userId() != null && Meteor.user().username == this.props.username ) {
			this.setState({ createPost:
				<div>
					<h3>Create a new post</h3>
					<AddPostForm name='Add Post' />
				</div>
		})
	}}

	componentWillUnmount() {
		this.state.subscription.posts.stop();
	}

	posts() {
		return Posts.find({ username: this.props.username }).fetch().reverse();
	}

	render() {
		return (
			<div className='blogPage'>
				<h1>Welcome to {this.props.username}'s blog!</h1>
				{ this.state.createPost }
				{this.posts().map( ( post ) => {
					return <BlogSingle key= { post._id } post={ post } />
				} )}
			</div>
		)
	}
}