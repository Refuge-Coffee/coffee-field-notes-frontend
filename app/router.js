import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('login', { path: '/login'});
  this.route('notes', function() {
    this.route('index', { path: '/' });
    this.route('show');
    this.route('new');
  });
  this.route('beans', function() {
    this.route('index', { path: '/' });
    this.route('show');
    this.route('new');
  });
  this.route('locations', function() {});
  this.route('roasters', function() {});
});

export default Router;
