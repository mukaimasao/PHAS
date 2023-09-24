/* eslint-disable no-undef */
export const migrationDirectory = 'migrations';
export const driver = 'mysql2';
export const connectionString = `mysql://${process.env.user}:${process.env.password}@localhost:3306/${process.env.database}`;