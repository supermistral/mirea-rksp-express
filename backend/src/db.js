import { Sequelize } from "sequelize";
import { dbUri } from "./config";


const sequelize = new Sequelize(dbUri);

export const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    } catch (err) {
        console.log("Unable to connect", err);
    }
}

export const migrate = (...models) => {
    for (const model of models) {
        // using 'force: true' is not good
        // made due to lack of migrations
        model.sync({ force: true }).then(() => {
            console.log(`${model} model is synced`)
        });
    }
}


export default sequelize;
