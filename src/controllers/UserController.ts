import Express, { Request, Response } from 'express';
const router = Express.Router();

import { UserRepository } from "../repositories/UserRepository";
import { Success, Abort } from '../services/Response';
import Message from '../config/Message';

export const UserController = () => {
    router.get('/', async (req: Request, res: Response) => {
        const users = await UserRepository.find();

        return Success(res, users);
    });

    router.get('/:id([0-9]+)', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        const user = await UserRepository.findOneBy({id});

        return Success(res, user);
    });

    router.post('/', async (req: Request, res: Response) => {
        const data = req.body;

        try {
            const user = await UserRepository.findOneBy({email: data.email});
            if (user) {
                return Abort(res, Message.EmailExist);
            }

            const newUser = await UserRepository.createNewUser(data);
            if (!newUser) {
                return Abort(res, Message.InvalidData);
            }

            return Success(res, newUser);
        } catch (e) {
            return Abort(res, e.message);
        }
    });

    router.delete('/:id([0-9]+)', async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const user = await UserRepository.getUserById(id);
            if (!user) {
                return Abort(res, Message.NotFound);
            }

            const deleted = await UserRepository.removeUser(user);

            return Success(res, deleted, Message.Success);
        } catch (e) {
            return Abort(res, e.message);
        }
    });

    return router;
};