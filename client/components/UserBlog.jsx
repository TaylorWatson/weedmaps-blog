import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import BlogSingle from './BlogSingle.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class UserBlog extends TrackerReact(Component) {

	constructor() {
		super();

		this.state = {
			subscription: {
				posts: Meteor.subscribe("userPosts")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.posts.stop();

	}


	posts() {
		return Posts.find().fetch();

	}

	render() {

		return (
			<div>
				<AddPostForm />
				{this.posts().map( (post) => {
					return <BlogSingle post={post} />
				} )}
			</div>
		)
	}
}