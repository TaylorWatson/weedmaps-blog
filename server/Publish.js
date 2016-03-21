Posts = new Meteor.Collection('posts');

Meteor.publish('allPosts', function() {
	return Posts.find();
});


Meteor.publish('userPosts', function() {
	return Posts.find({ user: this.userId });
});

Meteor.publish('allUsers', function() {
	return Meteor.users.find({}, {fields: {username: 1}})
});