import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-testova-тип-оплаты'),
  кабинет: DS.belongsTo('i-i-s-testova-кабинет', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-testova-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-testova-сотрудник', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-testova-оказание-услуг', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-testova-запись.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-testova-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    типОплаты: attr('Тип оплаты', { index: 5 }),
    сотрудник: belongsTo('i-i-s-testova-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    кабинет: belongsTo('i-i-s-testova-кабинет', 'Кабинет', {
      номерКабинета: attr('Номер кабинета', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'номерКабинета' }),
    клиент: belongsTo('i-i-s-testova-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фамилия' }),
    оказаниеУслуг: hasMany('i-i-s-testova-оказание-услуг', 'Оказание услуг', {
      сотрудник: belongsTo('i-i-s-testova-сотрудник', 'Сотрудник', {
        фамилия: attr('Фамилия', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фамилия' }),
      услуга: belongsTo('i-i-s-testova-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-testova-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    типОплаты: attr('Тип оплаты', { index: 5 }),
    сотрудник: belongsTo('i-i-s-testova-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true }),
    кабинет: belongsTo('i-i-s-testova-кабинет', 'Номер кабинета', {
      номерКабинета: attr('Номер кабинета', { index: 7 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-testova-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
