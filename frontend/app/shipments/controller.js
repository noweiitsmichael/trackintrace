import Ember from 'ember';

export default Ember.Controller.extend({
  bl_number: Ember.computed.alias('model'),

  statusUpdates: Ember.computed(function() {
    return this.get('ordersDetails')[this.get('bl_number.bl_number')];
  }),

  ordersDetails:  {
    TXG790195200:
      [
        {
          date: '2017-04-13 00:00:00',
          description: 'Empty Release for outbound ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Outbound Full CY ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Vessel Loading ',
          location: 'XINGANG',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Vessel discharge ',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Inbound Full CY',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-18 14:26:00',
          description: 'Inbound Full Delivery',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-19 10:48:00',
          description: 'Empty Container',
          location: 'OAKLAND',
        },
      ],
    TXG790195200:
      [
        {
          date: '2017-04-13 00:00:00',
          description: 'Empty Release for outbound ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Outbound Full CY ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Vessel Loading ',
          location: 'XINGANG',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Vessel discharge ',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Inbound Full CY',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-18 14:26:00',
          description: 'Inbound Full Delivery',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-19 10:48:00',
          description: 'Empty Container',
          location: 'OAKLAND',
        },
      ],
    TXG790195200:
      [
        {
          date: '2017-04-13 00:00:00',
          description: 'Empty Release for outbound ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Outbound Full CY ',
          location: 'XINGANG',
        },
        {
          date: '2017-04-19 23:30:00',
          description: 'Vessel Loading ',
          location: 'XINGANG',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Vessel discharge ',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-15 20:50:00',
          description: 'Inbound Full CY',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-18 14:26:00',
          description: 'Inbound Full Delivery',
          location: 'OAKLAND',
        },
        {
          date: '2017-05-19 10:48:00',
          description: 'Empty Container',
          location: 'OAKLAND',
        },
      ],
    },
});
