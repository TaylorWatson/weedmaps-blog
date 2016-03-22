import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './layout/MainLayout.jsx';
import { BlogLayout } from './layout/BlogLayout.jsx';
import WeedmapsBlog from './components/WeedmapsBlog.jsx';
import UserBlog from './components/UserBlog.jsx';

FlowRouter.route('/', {
	action() {
		mount( MainLayout, {
			content: (<WeedmapsBlog />)
		})
	}
});

FlowRouter.route('/user/:username', {
	action(params) {
		mount( BlogLayout, {
			content: (<UserBlog username={ params.username } />)
		})
	}
});

