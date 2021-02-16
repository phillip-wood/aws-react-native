import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Message {
  readonly id: string;
  readonly body?: string;
  readonly creator_id?: string;
  readonly conversation_id: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class Conversation {
  readonly id: string;
  readonly subject: string;
  readonly user_ids?: string[];
  readonly Messages?: (Message | null)[];
  constructor(init: ModelInit<Conversation>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

export declare class UserInfo {
  readonly id: string;
  readonly image?: string;
  readonly user_id?: string;
  readonly conversation_ids?: (string | null)[];
  constructor(init: ModelInit<UserInfo>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}

export declare class UserSneaker {
  readonly id: string;
  readonly user_id: string;
  readonly condition: string;
  readonly images?: (string | null)[];
  readonly Sneaker?: Sneaker;
  constructor(init: ModelInit<UserSneaker>);
  static copyOf(source: UserSneaker, mutator: (draft: MutableModel<UserSneaker>) => MutableModel<UserSneaker> | void): UserSneaker;
}

export declare class Sneaker {
  readonly id: string;
  readonly brand: string;
  readonly model: string;
  readonly submodel?: string;
  readonly colorway?: string;
  constructor(init: ModelInit<Sneaker>);
  static copyOf(source: Sneaker, mutator: (draft: MutableModel<Sneaker>) => MutableModel<Sneaker> | void): Sneaker;
}