import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './layout/MainLayout.jsx';
import WeedmapsBlog from './components/WeedmapsBlog.jsx';
import UserBlog from './components/UserBlog.jsx';

FlowRouter.route('/', {
	action() {
		mount( MainLayout, {
			content: (<WeedmapsBlog />)
		})
	}
});

FlowRouter.route('/blog/:id', {
	action( function() {
		return Meteor.userId().id;
	}) {
		mount( MainLayout, {
			content: (<UserBlog id={ params.id } />)
		})
	}
});