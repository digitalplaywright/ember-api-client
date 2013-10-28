var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('users', function() {
  	this.route('sign-in');
  })
  this.route('component-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
