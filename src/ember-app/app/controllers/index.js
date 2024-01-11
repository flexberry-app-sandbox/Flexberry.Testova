import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.testova.caption'),
          title: i18n.t('forms.application.sitemap.testova.title'),
          children: [{
            link: 'i-i-s-testova-клиент-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-клиент-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-testova-услуга-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-услуга-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-testova-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-сотрудник-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-testova-запись-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-запись-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-testova-кабинет-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-кабинет-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-testova-должность-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-должность-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})