// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Conversation, UserInfo, UserSneaker, Sneaker } = initSchema(schema);

export {
  Message,
  Conversation,
  UserInfo,
  UserSneaker,
  Sneaker
};