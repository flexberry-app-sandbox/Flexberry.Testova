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
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-testova-услуга-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-услуга-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-testova-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-сотрудник-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-testova-запись-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-запись-l.title'),
            children: null
          }, {
            link: 'i-i-s-testova-кабинет-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-кабинет-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-testova-должность-l',
            caption: i18n.t('forms.application.sitemap.testova.i-i-s-testova-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.testova.i-i-s-testova-должность-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})