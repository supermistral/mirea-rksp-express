import express from "express";
import { default as booksRouter } from "./books/routes";
import { default as usersRouter } from "./users/routes";
import { default as authRouter } from "./auth/routes";


const router = express.Router();

router.use('/books', booksRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);


export default router;
