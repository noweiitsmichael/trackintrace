import Ember from 'ember';

export default Ember.Route.extend({
  model(bl_number) {
    return bl_number;
  }
});
