import {Router} from 'express';

const routes = Router();

routes.get('/ola', (Request, Response) => {
    return Response.json({title: "Olá mundo"})
});

export default routes;
