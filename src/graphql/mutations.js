/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      body
      creator_id
      conversation_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      body
      creator_id
      conversation_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      body
      creator_id
      conversation_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      subject
      user_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      subject
      user_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      subject
      user_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        nextToken
        startedAt
      }
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      image
      user_id
      conversation_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      id
      image
      user_id
      conversation_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      id
      image
      user_id
      conversation_ids
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserSneaker = /* GraphQL */ `
  mutation CreateUserSneaker(
    $input: CreateUserSneakerInput!
    $condition: ModelUserSneakerConditionInput
  ) {
    createUserSneaker(input: $input, condition: $condition) {
      id
      user_id
      condition
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sneaker {
        id
        brand
        model
        submodel
        colorway
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateUserSneaker = /* GraphQL */ `
  mutation UpdateUserSneaker(
    $input: UpdateUserSneakerInput!
    $condition: ModelUserSneakerConditionInput
  ) {
    updateUserSneaker(input: $input, condition: $condition) {
      id
      user_id
      condition
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sneaker {
        id
        brand
        model
        submodel
        colorway
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteUserSneaker = /* GraphQL */ `
  mutation DeleteUserSneaker(
    $input: DeleteUserSneakerInput!
    $condition: ModelUserSneakerConditionInput
  ) {
    deleteUserSneaker(input: $input, condition: $condition) {
      id
      user_id
      condition
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Sneaker {
        id
        brand
        model
        submodel
        colorway
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createSneaker = /* GraphQL */ `
  mutation CreateSneaker(
    $input: CreateSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    createSneaker(input: $input, condition: $condition) {
      id
      brand
      model
      submodel
      colorway
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSneaker = /* GraphQL */ `
  mutation UpdateSneaker(
    $input: UpdateSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    updateSneaker(input: $input, condition: $condition) {
      id
      brand
      model
      submodel
      colorway
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSneaker = /* GraphQL */ `
  mutation DeleteSneaker(
    $input: DeleteSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    deleteSneaker(input: $input, condition: $condition) {
      id
      brand
      model
      submodel
      colorway
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
