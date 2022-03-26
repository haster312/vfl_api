import Express, { Request, Response } from 'express';
const router = Express.Router();

import { UserRepository } from "../repositories/UserRepository";

import { Success } from '../services/Response';

const UserController = () => {
    router.get('/', async (req: Request, res: Response) => {
        const users = await UserRepository.find();

        return Success(res, users);
    });

    return router;
};

export default UserController;