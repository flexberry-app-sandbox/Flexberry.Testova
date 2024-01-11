import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      кабинет: { serialize: 'odata-id', deserialize: 'records' },
      клиент: { serialize: 'odata-id', deserialize: 'records' },
      сотрудник: { serialize: 'odata-id', deserialize: 'records' },
      оказаниеУслуг: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
