/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo {
    onCreateUserInfo {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo {
    onUpdateUserInfo {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo {
    onDeleteUserInfo {
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
export const onCreateUserSneaker = /* GraphQL */ `
  subscription OnCreateUserSneaker {
    onCreateUserSneaker {
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
export const onUpdateUserSneaker = /* GraphQL */ `
  subscription OnUpdateUserSneaker {
    onUpdateUserSneaker {
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
export const onDeleteUserSneaker = /* GraphQL */ `
  subscription OnDeleteUserSneaker {
    onDeleteUserSneaker {
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
export const onCreateSneaker = /* GraphQL */ `
  subscription OnCreateSneaker {
    onCreateSneaker {
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
export const onUpdateSneaker = /* GraphQL */ `
  subscription OnUpdateSneaker {
    onUpdateSneaker {
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
export const onDeleteSneaker = /* GraphQL */ `
  subscription OnDeleteSneaker {
    onDeleteSneaker {
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
