Template.postItem.helpers({
	ownPost: function() {
		return this.UserId == Meteor.userId();
	},
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});