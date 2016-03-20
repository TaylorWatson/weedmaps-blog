import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import BlogSingle from './BlogSingle.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Posts = new Meteor.Collection('posts');

export default class WeedmapsBlog extends TrackerReact(Component) {

	constructor() {
		super();

		this.state = {
			subscription: {
				posts: Meteor.subscribe("allPosts")
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