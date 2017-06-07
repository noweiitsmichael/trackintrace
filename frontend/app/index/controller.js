import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),

    actions: {
        search() {
            this.transitionToRoute('search');
            // console.log('clicked');
            // return this.get('ajax').request('https://www.pilship.com/shared/ajax/?fn=get_tracktrace_bl&ref_num=TXG790195200', {
            //  method: 'GET',
            //  }).then((response) => {
            //  console.log('----FETCHED: ----');
            //  console.log(response);
            //  this.set('content', response);
            // });
        }
    }

});
