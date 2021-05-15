import { Router } from 'express';
import { BrandController } from '../controllers/BrandController';
import { DescriptionController } from '../controllers/DescriptionController';

const routes = Router();

//Descriptions Routes
routes.post('/description', new DescriptionController().create);

//Brands routes
routes.post('/brand', new BrandController().create);

export default routes;
