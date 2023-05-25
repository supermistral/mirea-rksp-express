import { verify } from "jsonwebtoken";
import { appConfig } from "../config";


export const verifyToken = (req, res, next) => {
    req.user = { user: null, verified: false };
    const tokenHeader = req.headers['authorization'];

    if (typeof tokenHeader !== "undefined") {
        const token = tokenHeader.split(' ')[1];

        verify(token, appConfig.secretKey, (err, data) => {
            if (!(err && typeof data === 'undefined')) {
                req.user = { user: data.user, verified: true };
                next();
            }
        });
    }

    return res.sendStatus(403);
}