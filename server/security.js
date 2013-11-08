Meteor.methods({
	getHash: function(myString) {
		return CryptoJS.HmacSHA256(myString, "cskwd2vKpxjh8jtxkZcs7jIL-3l5oaMZOt6LfqTq").toString();
	}
});