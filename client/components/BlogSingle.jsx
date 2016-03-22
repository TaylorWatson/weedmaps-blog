import React, { Component } from 'react';
import AddPostForm from './AddPostForm.jsx';

export default class BlogSingle extends Component {

	constructor() {
		super();
		this.deletePost = this.deletePost.bind(this);
		this.editHandle = this.editHandle.bind(this);
		this.state = {
			cudElements: <div></div>
		}
	}

	componentDidMount() {
		console.log('blogsingle mounted');
		if (Meteor.userId() != null && Meteor.user().username == this.props.post.username ) {
			this.setState({ cudElements:
				<div>
					<button onClick={ this.editHandle }>Edit Post</button>
					<button onClick={ this.deletePost }>Delete Post</button>
				</div>
			})
		}
	}

	deletePost() {
		Meteor.call('deletePost', this.props.post);
	}

	editHandle(event) {
		event.preventDefault();
		this.setState({ cudElements:
			 <div>
			 	<AddPostForm post={ this.props.post } name='Edit Post' />
			 </div>
		})
	}

	render() {
		return(
			<div>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.description}</p>
				<p>{this.props.post.createdAt.toString().slice(4,15)}</p>
				<p>{ this.props.post.username }</p>
				{ this.state.cudElements }
			</div>
		)
	}

}