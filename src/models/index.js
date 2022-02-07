// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Mag, G22 } = initSchema(schema);

export {
  Mag,
  G22
};