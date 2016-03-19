import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';

Posts = new Meteor.Collection('posts');


export default class WeedmapsBlog extends Component {

	render() {
		return (
			<div>
				<h2>Weed Maps Blog</h2>
				<AddPostForm />
			</div>
		)
	}
}