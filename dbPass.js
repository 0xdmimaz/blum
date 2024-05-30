const { Sequelize, Op, Model, DataTypes } = require('sequelize');

const DB_USER = 'postgres';
const DB_PASSWORD = '111111';
const DB_HOST = '127.0.0.1';
const DB_PORT = 5432;
const DB_DATABASE = 'tg_blum';

async function dbPass() {
    const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit();
    }

    const Account = sequelize.define('Account', {
        accId: DataTypes.INTEGER,
        token: DataTypes.STRING,
        nickname: DataTypes.STRING,
        proxy: DataTypes.STRING,
    },
{
            indexes:[
        {
            unique: true,
            fields:['accId']
        }
    ]
    });
}

dbPass();