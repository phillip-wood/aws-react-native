// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserInfo, UserSneaker, Sneaker } = initSchema(schema);

export {
  UserInfo,
  UserSneaker,
  Sneaker
};