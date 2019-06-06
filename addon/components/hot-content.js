import Component from '@ember/component';
import layout from '../templates/components/hot-content';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  value: computed('hotReloadCUSTOMhlProperty', function(){
    // const { hotReloadCUSTOMName, hotReloadCUSTOMhlContext, hotReloadCUSTOMhlProperty } = this;
    // if (String(hotReloadCUSTOMName).startsWith('this.')) {
    //   return hotReloadCUSTOMhlContext[hotReloadCUSTOMName.replact('this.','')];
    // }
    return this.get('hotReloadCUSTOMhlProperty');
  }),
  tagName: '',
  // Support ember-test-selectors https://github.com/simplabs/ember-test-selectors#usage-with-tagless-components
  supportsDataTestProperties: true
});
