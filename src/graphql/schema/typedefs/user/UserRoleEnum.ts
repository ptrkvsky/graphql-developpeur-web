import { GraphQLEnumType } from 'graphql';

const UserRoleEnum = new GraphQLEnumType({
  name: 'UserRoleEnum',
  values: {
    USER: {
      value: 'USER',
    },
    ADMIN: {
      value: 'ADMIN',
    },
  },
});

export default UserRoleEnum;
