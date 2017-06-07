import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/', { path:'index' });
  this.route('search');
  this.route('shipments', { path: '/shipments/:bl_number' });
});

export default Router;
