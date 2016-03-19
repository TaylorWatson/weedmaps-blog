Meteor.methods({
	addPost(options) {
		Posts.insert({
			title: options['title'],
			description: options['description'],
			createdAt: new Date()
		});
	}
});