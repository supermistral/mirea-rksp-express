import express from 'express';
import cors from 'cors';
import { appConfig } from './config';
import { testDbConnection, migrate } from "./db";
import router from './routes';
import Book from './books/models'
import User from './users/models'


// connect to db and migrate
await testDbConnection();
migrate(Book, User);


const app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/api', router);

app.listen(appConfig.port, () => console.log(`Listening on port ${appConfig.port}`));


export default app;
