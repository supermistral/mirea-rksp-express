/*
    Settings for the project
*/

export const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
};

export const dbUri = `postgres://${dbConfig.user}:${dbConfig.password}` +
    `@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

export const appConfig = {
    port: 8000,
}
