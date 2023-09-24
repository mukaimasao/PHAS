import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: `${process.env.host}`,
  port: 3306,
  database: `${process.env.database}`,
  username: `${process.env.user}`,
  password: `${process.env.password}`,
  models: [__dirname + '/models/*.model.ts'],
});

export default sequelize;