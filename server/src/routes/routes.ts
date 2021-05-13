import { Router } from 'express';
import { DescriptionController } from '../controllers/DescriptionController';

const routes = Router();

routes.post('/description', new DescriptionController().create);

export default routes;
