import React from 'react';
import AccountsUI from '../components/AccountsUI.jsx';

export const MainLayout = ({ content }) => (
		<div className='main-layout'>
			<header>
				<h2>Weedmaps Blog</h2>
				<nav>
					<a href="/">Home </a>
					<AccountsUI />
				</nav>
			</header>
			{ content }
		</div>
)
