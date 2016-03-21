import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';
import BlogSingle from './BlogSingle.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import UserSingle from './UserSingle.jsx';

Posts = new Meteor.Collection('posts');

export default class WeedmapsBlog extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				allUsers: Meteor.subscribe("allUsers")
			}
		}

	}

	componentDidMount() {
		console.log(Meteor.users.find());
	}

	componentWillUnmount() {
		this.state.subscription.allUsers.stop();
	}

	users() {
		return Meteor.users.find();
	}

	render() {
		return (
			<div>
			<br />
				{ this.users().map(( user ) => {
					return <UserSingle key={ user._id } user={ user } />
				})}
			</div>
		)
	}
}