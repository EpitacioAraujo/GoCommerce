import { Router } from 'express';
import { BrandController } from '../controllers/BrandController';
import { DescriptionController } from '../controllers/DescriptionController';
import { ProductController } from '../controllers/ProductController';
import { SallerController } from '../controllers/SallerController';

const routes = Router();

//Descriptions Routes
routes.post('/description', new DescriptionController().create);

//Brands routes
routes.post('/brand', new BrandController().create);

//Products routes
routes.post('/product', new ProductController().create)

//Sallers routes
routes.post('/saller', new SallerController().create)

export default routes;
