import Express, { Request, Response } from 'express';
const router = Express.Router();

import { UserRepository } from "../repositories/UserRepository";
import { AdminRepository } from "../repositories/AdminRepository";
import { Success, Abort } from '../services/Response';
import Message from '../config/Message';
import { ILoginCredential } from '../entity/interface/Auth';
import { validateLogin } from "./middleware/AuthenMiddleware";
import { generateToken } from "../helpers/JWT";

export const AuthController = () => {
    router.post('/admin/login', validateLogin, async (req: Request, res: Response) => {
        const { email, password }: ILoginCredential = req.body;

        if (!email || !password) {
            return Abort(res, Message.InvalidCredentials, 400);
        }

        const admin = await AdminRepository.findOneBy({ email });

        if (!admin) {
            return Abort(res, Message.NotFound, 400);
        }

        const valid = admin.validatePassword(password);
        if (!valid) {
            return Abort(res, Message.InvalidCredentials, 400);
        }

        return Success(res, admin);
    });

    router.post('/login', validateLogin, async (req: Request, res: Response) => {
        const { email, password }: ILoginCredential = req.body;

        if (!email || !password) {
            return Abort(res, Message.InvalidCredentials, 400);
        }

        const user = await UserRepository.findOneBy({ email });

        if (!user) {
            return Abort(res, Message.NotFound, 400);
        }

        const valid = user.validatePassword(password);
        if (!valid) {
            return Abort(res, Message.InvalidCredentials, 400);
        }

        user.hidePassword();
        const token = generateToken({user_id: user.id, role: user.role, type: 'USER'});

        return Success(res, {token});
    });

    return router;
}