import { gql } from '@apollo/client';

export const NEW_USER = gql`
  mutation aNewUser ($input: UserInput){
    newUser(input: $input) {
      id
      email
      username
      password
      createdAt
    }
  }
`;

export const AUTHENTICATION = gql`
  mutation login ($input: LoginInput) {
    authentication (input: $input) {
      token
    }
  }
`;