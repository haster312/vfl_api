import Express, { Request, Response } from 'express';
const router = Express.Router();

import { UserRepository } from "../repositories/UserRepository";
import { Success, Abort } from '../services/Response';
import Message from '../config/Message';

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

    router.post('/', async (req: Request, res: Response) => {
        const data = req.body;

        try {
            const user = await UserRepository.createNewUser(data);
            if (!user) {
                return Abort(res, Message.InvalidData);
            }

            return Success(res, user);
        } catch (e) {
            return Abort(res, e.message);
        }
    });

    router.delete('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const user = await UserRepository.getUserById(id);
            if (!user) {
                return Abort(res, Message.NotFound);
            }

            await UserRepository.removeUser(user);

            return Success(res, true, Message.Success);
        } catch (e) {
            return Abort(res, e.message);
        }
    });

    return router;
};

export default UserController;