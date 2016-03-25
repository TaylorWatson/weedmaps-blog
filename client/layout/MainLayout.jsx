import React from 'react';
import AccountsUI from '../components/AccountsUI.jsx';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';


export const MainLayout = ({ content }) => (
		<div className='main-layout'>
			<header>
				<a href="/"><h2>Blog</h2></a>
				<nav>
					<AccountsUI />
				</nav>
			</header>

				<Paper className='blogPaper' zDepth={3}>
					{ content }
				</Paper>

		</div>
)
