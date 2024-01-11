import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-testova-оказание-услуг', 'Unit | Serializer | i-i-s-testova-оказание-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-testova-оказание-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-testova-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
