/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
