import express from "express";
import UserService from "./service";
import { wrapper } from "../service";


const router = express.Router();
const service = new UserService();

router.get('/', wrapper(service, 'getAll'));
router.get('/:id', wrapper(service, 'getById'));
router.post('/', wrapper(service, 'create'));
router.put('/:id', wrapper(service, 'updateById'));
router.delete('/:id', wrapper(service, 'deleteById'));


export default router;
