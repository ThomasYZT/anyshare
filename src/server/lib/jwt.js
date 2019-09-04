import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
export default {
    /**
     * 生成token
     * @param payLoad
     */
    generateToken (payLoad) {
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, '../pem/rsaprivatekey.pem'));
        let token = jwt.sign({
            ...payLoad,
            exp : created + 60 * 60
        }, cert, { algorithm : 'RS256' });
        return token;
    },
    /**
     * 严重token
     * @param token
     */
    verifyToken (token) {
        let cert = fs.readFileSync(path.join(__dirname, '../pem/rsapublickey.pem'));
        let res;
        try {
            res = jwt.verify(token, cert);
        } catch (err) {
            res = err.name;
        }

        return res;
    }
};
