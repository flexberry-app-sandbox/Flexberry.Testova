import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДолжности: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодДолжности: {
    descriptionKey: 'models.i-i-s-testova-должность.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-testova-должность.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-testova-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-testova-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
