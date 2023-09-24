import * as createUser from './create';
import * as getAllUsers from './getAll';
import * as getByPkUser from './getByPk';
import * as updateByPkUser from './updateByPk';
import * as deleteByPkUser from './deleteByPk';

export const UserController = {
  ...createUser,
  ...getAllUsers,
  ...getByPkUser,
  ...updateByPkUser,
  ...updateByPkUser,
  ...deleteByPkUser,
};
