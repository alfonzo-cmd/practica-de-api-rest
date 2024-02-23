import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'ingreso_documentos',
    'postgres',
    'E12lefante@34',
    {
        host: 'localhost',
        dialect: 'postgres'

    });

