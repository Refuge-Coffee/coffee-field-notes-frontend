import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('notes', function() {
    this.route('index', { path: '/' });
    this.route('show');
    this.route('new');
  });
  this.route('coffee');
  this.route('coffee', function() {
    this.route('new');
  });
});

export default Router;
