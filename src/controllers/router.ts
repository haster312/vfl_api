import Express from 'express';
const router = Express.Router();

const routes = () => {
    router.get('/', (req, res) => {
        return res.json('Success');
    });

    return router;
};

export default routes;