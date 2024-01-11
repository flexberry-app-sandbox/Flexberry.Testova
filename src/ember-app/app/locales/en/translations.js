import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestovaДолжностьLForm from './forms/i-i-s-testova-должность-l';
import IISTestovaЗаписьLForm from './forms/i-i-s-testova-запись-l';
import IISTestovaКабинетLForm from './forms/i-i-s-testova-кабинет-l';
import IISTestovaКлиентLForm from './forms/i-i-s-testova-клиент-l';
import IISTestovaСотрудникLForm from './forms/i-i-s-testova-сотрудник-l';
import IISTestovaУслугаLForm from './forms/i-i-s-testova-услуга-l';
import IISTestovaДолжностьEForm from './forms/i-i-s-testova-должность-e';
import IISTestovaЗаписьEForm from './forms/i-i-s-testova-запись-e';
import IISTestovaКабинетEForm from './forms/i-i-s-testova-кабинет-e';
import IISTestovaКлиентEForm from './forms/i-i-s-testova-клиент-e';
import IISTestovaСотрудникEForm from './forms/i-i-s-testova-сотрудник-e';
import IISTestovaУслугаEForm from './forms/i-i-s-testova-услуга-e';
import IISTestovaДокументыModel from './models/i-i-s-testova-документы';
import IISTestovaДолжностьModel from './models/i-i-s-testova-должность';
import IISTestovaЗаписьModel from './models/i-i-s-testova-запись';
import IISTestovaКабинетModel from './models/i-i-s-testova-кабинет';
import IISTestovaКлиентModel from './models/i-i-s-testova-клиент';
import IISTestovaМатериалModel from './models/i-i-s-testova-материал';
import IISTestovaОказаниеУслугModel from './models/i-i-s-testova-оказание-услуг';
import IISTestovaПроизводительModel from './models/i-i-s-testova-производитель';
import IISTestovaСоставУслугиModel from './models/i-i-s-testova-состав-услуги';
import IISTestovaСотрудникModel from './models/i-i-s-testova-сотрудник';
import IISTestovaУслугаModel from './models/i-i-s-testova-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-testova-документы': IISTestovaДокументыModel,
    'i-i-s-testova-должность': IISTestovaДолжностьModel,
    'i-i-s-testova-запись': IISTestovaЗаписьModel,
    'i-i-s-testova-кабинет': IISTestovaКабинетModel,
    'i-i-s-testova-клиент': IISTestovaКлиентModel,
    'i-i-s-testova-материал': IISTestovaМатериалModel,
    'i-i-s-testova-оказание-услуг': IISTestovaОказаниеУслугModel,
    'i-i-s-testova-производитель': IISTestovaПроизводительModel,
    'i-i-s-testova-состав-услуги': IISTestovaСоставУслугиModel,
    'i-i-s-testova-сотрудник': IISTestovaСотрудникModel,
    'i-i-s-testova-услуга': IISTestovaУслугаModel
  },

  'application-name': 'Testova',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Testova',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testova',
          title: 'Testova'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        testova: {
          caption: 'Testova',
          title: 'Testova',
          'i-i-s-testova-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-testova-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-testova-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-testova-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-testova-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-testova-должность-l': {
            caption: 'Должность',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-testova-должность-l': IISTestovaДолжностьLForm,
    'i-i-s-testova-запись-l': IISTestovaЗаписьLForm,
    'i-i-s-testova-кабинет-l': IISTestovaКабинетLForm,
    'i-i-s-testova-клиент-l': IISTestovaКлиентLForm,
    'i-i-s-testova-сотрудник-l': IISTestovaСотрудникLForm,
    'i-i-s-testova-услуга-l': IISTestovaУслугаLForm,
    'i-i-s-testova-должность-e': IISTestovaДолжностьEForm,
    'i-i-s-testova-запись-e': IISTestovaЗаписьEForm,
    'i-i-s-testova-кабинет-e': IISTestovaКабинетEForm,
    'i-i-s-testova-клиент-e': IISTestovaКлиентEForm,
    'i-i-s-testova-сотрудник-e': IISTestovaСотрудникEForm,
    'i-i-s-testova-услуга-e': IISTestovaУслугаEForm
  },

});

export default translations;
