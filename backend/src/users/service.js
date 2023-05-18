import BaseService from "../service";
import User from "./models";


class UserService extends BaseService {
    constructor() {
        super(User);
    }
}


export default UserService;
