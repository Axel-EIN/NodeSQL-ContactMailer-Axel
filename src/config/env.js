import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT,

    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_TYPE: process.env.DB_TYPE,

    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,

    MAIL_TO: process.env.MAIL_TO,
}