// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserSneaker, Sneaker } = initSchema(schema);

export {
  UserSneaker,
  Sneaker
};