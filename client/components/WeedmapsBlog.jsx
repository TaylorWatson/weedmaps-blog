import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import BlogSingle from './BlogSingle.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Posts = new Meteor.Collection('posts');

export default class WeedmapsBlog extends TrackerReact(Component) {

	posts() {
	return Posts.find().fetch();
	}

	render() {
		return (
			<div>
				<h2>Weed Maps Blog</h2>
				<AddPostForm />
				{this.posts().map( (post) => {
					return <BlogSingle post={post} />
				} )}
			</div>
		)
	}
}