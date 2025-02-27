//npm install sequelize
import Sequelize from 'sequelize';
import 'dotenv/config'

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: console.log,
        dialectOptions: {
            ssl: false
        }
    }
);

export default sequelize;