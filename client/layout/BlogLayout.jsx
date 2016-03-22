import React from 'react';
import AccountsUI from '../components/AccountsUI.jsx';

export const BlogLayout = ({content}) => (
	<div className='blog-layout'>
		<header>
			<h2>Weedmaps Blog</h2>
			<nav>
				<a href="/">Home </a>
				<AccountsUI />
			</nav>
		</header>
		<main>
		{ content }
		</main>
	</div>
)