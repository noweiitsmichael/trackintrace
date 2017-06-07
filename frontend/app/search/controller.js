import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  searchResults: [
    {
        bl_number: 'TXG790195200',
        steamship_line: 'PIL',
        origin: 'Xingang',
        destination: 'Oakland',
        vessel: 'CSCL AUTUMN',
        voyage: 'VQC60007E',
        eta: 'April 19, 2017',
        containers: [{
            number: 'SEGU1712879',
            size: '20',
            type: 'GP',
        }]
    },
    {
        bl_number: 'TXG790195100',
        steamship_line: 'PIL',
        origin: 'Xingang',
        destination: 'Oakland',
        vessel: 'CSCL AUTUMN',
        voyage: 'VQC60007E',
        eta: 'April 19, 2017',
        containers: [
          {
              number: 'SEGU1712879',
              size: '20',
              type: 'GP',
          },
          {
              number: 'SEGU1712879',
              size: '40',
              type: 'HC',
          },
        ]
    },
    {
        bl_number: 'TXG790214500',
        steamship_line: 'PIL',
        origin: 'Xingang',
        destination: 'Oakland',
        vessel: 'CSCL AUTUMN',
        voyage: 'VQC60007E',
        eta: 'April 19, 2017',
        containers: [{
            number: 'SEGU1712879',
            size: '20',
            type: 'GP',
        }]
    },
  ],

  actions: {
    goToDetails(bl_number) {
      this.transitionToRoute('shipments', bl_number);
    },

    getInfo() {
      console.log('clicked');
      return this.get('ajax').request('https://www.pilship.com/shared/ajax/?fn=get_tracktrace_bl&ref_num=TXG790195200', {
        method: 'GET',
      }).then((response) => {
        console.log('----FETCHED: ----');
        console.log(response);
        this.set('content', response);
      });
    }
  }

});
