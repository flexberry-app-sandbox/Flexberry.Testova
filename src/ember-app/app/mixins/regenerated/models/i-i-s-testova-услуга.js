import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодУслуги: DS.attr('number'),
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  составУслуги: DS.hasMany('i-i-s-testova-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  кодУслуги: {
    descriptionKey: 'models.i-i-s-testova-услуга.validations.кодУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-testova-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-testova-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-testova-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-testova-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-testova-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
