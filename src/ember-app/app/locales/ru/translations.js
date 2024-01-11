import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import IISTestovaОказаниеУслугModel from './models/i-i-s-testova-оказание-услуг';
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
    'i-i-s-testova-оказание-услуг': IISTestovaОказаниеУслугModel,
    'i-i-s-testova-сотрудник': IISTestovaСотрудникModel,
    'i-i-s-testova-услуга': IISTestovaУслугаModel
  },

  'application-name': 'Testova',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Testova',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testova',
          title: 'Testova'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
