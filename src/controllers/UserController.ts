import Express, { Request, Response } from 'express';
const router = Express.Router();

import { UserRepository } from "../repositories/UserRepository";

import { Success } from '../services/Response';

const UserController = () => {
    router.get('/', async (req: Request, res: Response) => {
        const users = await UserRepository.find();

        return Success(res, users);
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const user = await UserRepository.findOneBy({id});

        return Success(res, user);
    });

    return router;
};

export default UserController;