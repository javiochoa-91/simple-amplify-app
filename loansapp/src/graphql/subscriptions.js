/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLoan = /* GraphQL */ `
  subscription OnCreateLoan {
    onCreateLoan {
      id
      type
      amount
      isApproved
      requestor {
        id
        name
        email
        address
        credit
        loans {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLoan = /* GraphQL */ `
  subscription OnUpdateLoan {
    onUpdateLoan {
      id
      type
      amount
      isApproved
      requestor {
        id
        name
        email
        address
        credit
        loans {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLoan = /* GraphQL */ `
  subscription OnDeleteLoan {
    onDeleteLoan {
      id
      type
      amount
      isApproved
      requestor {
        id
        name
        email
        address
        credit
        loans {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      address
      credit
      loans {
        items {
          id
          type
          amount
          isApproved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      address
      credit
      loans {
        items {
          id
          type
          amount
          isApproved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      address
      credit
      loans {
        items {
          id
          type
          amount
          isApproved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
