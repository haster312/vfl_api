import Express from 'express';
const router = Express.Router();

import { UserController } from "./UserController";
import { AuthController } from "./AuthController";

import { checkAuth } from "./middleware/AuthenMiddleware";

const routes = () => {
    /**
     * Authenticate Controller
     */
    router.use('/auth', AuthController());

    /**
     * User Controller
     */
    router.use('/user', checkAuth, UserController());


    return router;
};

export default routes;