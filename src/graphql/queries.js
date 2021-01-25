/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSneaker = /* GraphQL */ `
  query GetSneaker($id: ID!) {
    getSneaker(id: $id) {
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
export const listSneakers = /* GraphQL */ `
  query ListSneakers(
    $filter: ModelSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSneakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSneakers = /* GraphQL */ `
  query SyncSneakers(
    $filter: ModelSneakerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSneakers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
