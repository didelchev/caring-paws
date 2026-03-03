import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

const userService = {
    async register(email, username, password) {
        const user = await User.findOne({ email });

        if (user) {
            throw new Error('User already exists');
        }

        const createdUser = await User.create({ email, username, password });

        return generateResponse(createdUser);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid user or password');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid user or password');
        }

        return generateResponse(user);
    },
    logout() {
        return true;
    }
}

function generateResponse(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username, 
    };

    const secret = process.env.JWT_SECRET || 'MYSECRET';
    const token = jwt.sign(payload, secret, { expiresIn: '2h' });

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: token,
    };
}

export default userService;