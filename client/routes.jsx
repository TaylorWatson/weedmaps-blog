import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './layout/MainLayout.jsx';
import WeedmapsBlog from './components/WeedmapsBlog.jsx';

FlowRouter.route('/', {
	action() {
		mount( MainLayout, {
			content: (<WeedmapsBlog />)
		})
	}
});