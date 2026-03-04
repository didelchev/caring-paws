import jwt from 'jsonwebtoken';
import { getErrorMessage } from '../utils/errorUtils';

export const authMiddleware = (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'MYSECRET');

        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (err) {
        res.status(401).json({message: getErrorMessage(err)})
    }
}
