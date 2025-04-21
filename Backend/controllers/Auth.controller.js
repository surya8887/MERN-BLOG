import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const checkuser = await User.findOne({ email });
        if (checkuser) {
            return next(handleError(409, 'User already registered.'));
        }

        const hashedPassword = bcryptjs.hashSync(password, saltRounds);

        const user = new User({
            name, email, password: hashedPassword
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: 'Registration successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return next(handleError(404, 'Invalid login credentials.'));
        }

        const comparePassword = await bcryptjs.compare(password, user.password);
        if (!comparePassword) {
            return next(handleError(401, 'Invalid login credentials.'));
        }

        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        const userObj = user.toObject({ getters: true });
        delete userObj.password;

        res.status(200).json({
            success: true,
            user: userObj,
            message: 'Login successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};

export const GoogleLogin = async (req, res, next) => {
    try {
        const { name, email, avatar } = req.body;
        let user = await User.findOne({ email });
        // console.log(name);
        
        if (!user) {
            const randomPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(randomPassword, saltRounds);

            user = new User({
                name,
                email,
                avatar,
                password: hashedPassword
            });

            await user.save();
        }

        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        const userObj = user.toObject({ getters: true });
        delete userObj.password;

        res.status(200).json({
            success: true,
            user: userObj,
            message: 'Login successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};

export const Logout = async (req, res, next) => {
    try {
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        res.status(200).json({
            success: true,
            message: 'Logout successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};
