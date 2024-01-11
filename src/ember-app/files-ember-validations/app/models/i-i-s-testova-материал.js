import {
  defineNamespace,
  Model as МатериалMixin
} from '../mixins/regenerated/models/i-i-s-testova-материал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МатериалMixin, {
});

defineNamespace(Model);

export default Model;
