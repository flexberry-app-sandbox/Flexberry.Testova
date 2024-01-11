import {
  defineNamespace,
  Model as ПроизводительMixin
} from '../mixins/regenerated/models/i-i-s-testova-производитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроизводительMixin, {
});

defineNamespace(Model);

export default Model;
