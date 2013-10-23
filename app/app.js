import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

Ember.OAuth2.config = {
  google: {
    clientId: "xxxxxxxxxxxx",
    authBaseUri: 'http://localhost:5000/oauth/authorize',
    redirectUri: 'http://localhost:8000/oauth/callback',
    scope: 'public write'
  } 
} 

Ember.OAuth2.reopen({ onSuccess: function() { return 'hello, onSuccess' } });
Ember.OAuth2.reopen({ onError: function() { return 'hello, onError' } });


export default App;
