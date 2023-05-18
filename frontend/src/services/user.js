import BaseService from "./base";


class UserService extends BaseService {
    constructor() {
        super("users");
    }
}


const userService = new UserService();

export default userService;