import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-testova-клиент', 'Unit | Model | i-i-s-testova-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-testova-документы',
    'model:i-i-s-testova-должность',
    'model:i-i-s-testova-запись',
    'model:i-i-s-testova-кабинет',
    'model:i-i-s-testova-клиент',
    'model:i-i-s-testova-оказание-услуг',
    'model:i-i-s-testova-сотрудник',
    'model:i-i-s-testova-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
