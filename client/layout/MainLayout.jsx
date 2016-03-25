import React from 'react';
import AccountsUI from '../components/AccountsUI.jsx';

export const MainLayout = ({ content }) => (
		<div className='main-layout'>
			<header>
				<a href="/"><h2>Weedmaps Blog</h2></a>
				<nav>
					<AccountsUI />
				</nav>
			</header>
			<main>
			{ content }
			</main>
		</div>
)
