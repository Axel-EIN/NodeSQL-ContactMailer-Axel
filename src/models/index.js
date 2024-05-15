import { Sequelize } from "sequelize";
import modeleContact from "./contact.model.js";
import env from '../config/env.js';

const connection = new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD,
    {
        host: env.DB_URI,
        dialect: env.DB_TYPE
    }
);

try {
    await connection.authenticate();
    console.log("Connexion à la BDD OK");
} catch (error) {
    console.error("Probleme lors de la connexion à la BDD", error);
}

modeleContact(connection, Sequelize);

const {
    Contact
} = connection.models;

await connection.sync( {alter: true} );
console.log("Synchro OK");

export {
    Contact
};