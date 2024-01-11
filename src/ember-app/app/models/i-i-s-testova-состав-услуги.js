import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СоставУслугиMixin
} from '../mixins/regenerated/models/i-i-s-testova-состав-услуги';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставУслугиMixin, Validations, {
});

export default Model;
