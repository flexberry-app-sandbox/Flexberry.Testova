import {
  defineNamespace,
  Model as СоставУслугиMixin
} from '../mixins/regenerated/models/i-i-s-testova-состав-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставУслугиMixin, {
});

defineNamespace(Model);

export default Model;
