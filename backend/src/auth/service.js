import jsonwebtoken from 'jsonwebtoken';
import { compare } from 'bcrypt';
import UserService from '../users/service';
import { appConfig } from '../config';

const { sign } = jsonwebtoken;


class AuthService {
    constructor() {
        this.userService = new UserService();
    }

    async login(req, res) {
        const { email, password } = req.body;
        let token = null;

        const matchedUser = await this.userService._getByEmail(email);

        if (matchedUser === null) {
            return res.sendStatus(401);
        }

        const passwordEqual = await compare(password, matchedUser.password);
        if (email == matchedUser.email && passwordEqual) {
            token = sign(
                { email: matchedUser.email, role: matchedUser.role },
                appConfig.secretKey,
                { expiresIn: appConfig.jwtExpiresIn }
            )
        }

        if (token) {
            return res.status(200).json({
                token: token,
                user: {
                    email: email,
                    role: matchedUser.role
                }
            });
        }

        return res.sendStatus(401);
    }

    async signup(req, res) {
        return await this.userService.create(req, res);
    }

    async logout(req, res) {
        const tokenHeader = req.headers['Auhorization'];

        if (typeof tokenHeader !== 'undefined') {
            const token = tokenHeader.split(' ')[1];
        }

        return res.sendStatus(200);
    }
}

export default AuthService;
