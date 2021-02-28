/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      conversation_id
      body
      userinfo_id
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
      conversation_id
      body
      userinfo_id
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
      conversation_id
      body
      userinfo_id
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
      user_id
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserSneakers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo {
    onUpdateUserInfo {
      id
      user_id
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserSneakers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo {
    onDeleteUserInfo {
      id
      user_id
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserSneakers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUserSneaker = /* GraphQL */ `
  subscription OnCreateUserSneaker {
    onCreateUserSneaker {
      id
      condition
      images
      userinfo_id
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
      condition
      images
      userinfo_id
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
      condition
      images
      userinfo_id
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
