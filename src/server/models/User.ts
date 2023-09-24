import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';

export interface IUser {
  idUser: number;
  name: string;
  email: string;
  password: string;
}

class User extends Model implements IUser {
  idUser!: number;
  name!: string;
  email!: string;
  password!: string;
}

User.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: 'Users',
    sequelize,
  },
);

User.sync();
