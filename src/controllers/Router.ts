import Express from 'express';
const router = Express.Router();

import UserController from "./UserController";

const routes = () => {
    router.use('/user', UserController());

    return router;
};

export default routes;