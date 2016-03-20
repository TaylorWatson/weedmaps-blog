Meteor.methods({
	addPost(title, description) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('not logged in');
		}
		Posts.insert({
			title: title,
			description: description,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	}

});