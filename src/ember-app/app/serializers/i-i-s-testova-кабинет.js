import { Serializer as КабинетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-testova-кабинет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КабинетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
