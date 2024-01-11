import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументыMixin
} from '../mixins/regenerated/models/i-i-s-testova-документы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументыMixin, Validations, {
});

defineProjections(Model);

export default Model;
