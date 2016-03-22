Meteor.methods({
	addPost(post) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('not logged in');
		}
		Posts.insert({
			title: post.title,
			description: post.description,
			createdAt: new Date(),
			userId: Meteor.userId(),
			username: Meteor.user().username
		});
	}

});