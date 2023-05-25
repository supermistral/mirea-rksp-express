import express from "express";
import AuthService from "./service";
import { wrapper } from "../service";


const router = express.Router();
const service = new AuthService();

router.post('/login', wrapper(service, 'login'));
router.get('/logout', wrapper(service, 'logout'));
router.post('/signup', wrapper(service, 'signup'));


export default router;
