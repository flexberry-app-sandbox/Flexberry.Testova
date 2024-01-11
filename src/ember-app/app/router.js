import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-testova-должность-l');
  this.route('i-i-s-testova-должность-e',
  { path: 'i-i-s-testova-должность-e/:id' });
  this.route('i-i-s-testova-должность-e.new',
  { path: 'i-i-s-testova-должность-e/new' });
  this.route('i-i-s-testova-запись-l');
  this.route('i-i-s-testova-запись-e',
  { path: 'i-i-s-testova-запись-e/:id' });
  this.route('i-i-s-testova-запись-e.new',
  { path: 'i-i-s-testova-запись-e/new' });
  this.route('i-i-s-testova-кабинет-l');
  this.route('i-i-s-testova-кабинет-e',
  { path: 'i-i-s-testova-кабинет-e/:id' });
  this.route('i-i-s-testova-кабинет-e.new',
  { path: 'i-i-s-testova-кабинет-e/new' });
  this.route('i-i-s-testova-клиент-l');
  this.route('i-i-s-testova-клиент-e',
  { path: 'i-i-s-testova-клиент-e/:id' });
  this.route('i-i-s-testova-клиент-e.new',
  { path: 'i-i-s-testova-клиент-e/new' });
  this.route('i-i-s-testova-сотрудник-l');
  this.route('i-i-s-testova-сотрудник-e',
  { path: 'i-i-s-testova-сотрудник-e/:id' });
  this.route('i-i-s-testova-сотрудник-e.new',
  { path: 'i-i-s-testova-сотрудник-e/new' });
  this.route('i-i-s-testova-услуга-l');
  this.route('i-i-s-testova-услуга-e',
  { path: 'i-i-s-testova-услуга-e/:id' });
  this.route('i-i-s-testova-услуга-e.new',
  { path: 'i-i-s-testova-услуга-e/new' });
});

export default Router;
