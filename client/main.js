newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);

Deps.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');

 window.intercomSettings = {
    // TODO: The current logged in user's email address.
    email: "john.doe@example.com",
    // TODO: The current logged in user's sign-up date as a Unix timestamp.
    created_at: 1234567890,
    app_id: "2c3fa0169acc4f0e48ef4e5224a53036dd77c06a"
  };