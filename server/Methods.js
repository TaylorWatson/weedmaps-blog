Meteor.methods({
	addPost(post) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('you must be logged in to post.');
		}
		Posts.insert({
			title: post.title,
			description: post.description,
			createdAt: new Date(),
			userId: Meteor.userId(),
			username: Meteor.user().username
		});
	},
	updatePost(post) {
		if(Meteor.userId() !== post.userId) {
			throw new Meteor.Error('you cannot update another users blog post.');
		}
		Posts.update(post._id , {
			$set: {
				title: post.title,
				description: post.description + ' - edited'
			}
		});
	},
	deletePost(post) {
		if(Meteor.userId() !== post.userId) {
			throw new Meteor.Error('you cannot delete another users blog post.');
		}
		Posts.remove( post._id );
	}
});