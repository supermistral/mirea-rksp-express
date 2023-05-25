import { hash } from "bcrypt"
import BaseService from "../service";
import User from "./models";


class UserService extends BaseService {
    constructor() {
        super(User);
    }

    async _getByEmail(email) {
        return await this.model.findOne({ where: { email: email } });
    }

    async create(req, res) {
        const body = req.body;
        const password = body.password;
        const encryptedPassword = await hash(password, 10);
        const result = await this.model.create({ ...body, password: encryptedPassword });

        res.status(201).json(result);   // debug
    }
}


export default UserService;
