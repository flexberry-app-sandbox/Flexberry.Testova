import { Serializer as МатериалSerializer } from
  '../mixins/regenerated/serializers/i-i-s-testova-материал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МатериалSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
