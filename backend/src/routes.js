import express from "express";
import { default as booksRouter } from "./books/routes";
import { default as usersRouter } from "./users/routes";


const router = express.Router();

router.use('/books', booksRouter);
router.use('/users', usersRouter);


export default router;
