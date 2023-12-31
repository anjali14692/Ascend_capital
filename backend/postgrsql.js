import { Sequelize } from "sequelize";

export const connection= async () =>{
    const sequelize = new Sequelize('taskboard', 'postgres', 'Bu$$67Snaap', {
        host: 'localhost',
        dialect: 'postgres'
      });
}

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }