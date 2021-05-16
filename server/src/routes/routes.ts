import { Router } from 'express';
import { BrandController } from '../controllers/BrandController';
import { DescriptionController } from '../controllers/DescriptionController';
import { ProductController } from '../controllers/ProductController';
import { PurchaseController } from '../controllers/PurchaseController';
import { SallerController } from '../controllers/SallerController';

const routes = Router();

//Descriptions Routes
routes.post('/description', new DescriptionController().create)
routes.get('/description/:id', new DescriptionController().read)

//Brands routes
routes.post('/brand', new BrandController().create)
routes.get('/brand/:id', new BrandController().read)

//Products routes
routes.post('/product', new ProductController().create)
routes.get('/product/:id', new ProductController().read)

//Sallers routes
routes.post('/saller', new SallerController().create)
routes.get('/saller/:id', new SallerController().read)

//Purchase routes
routes.post('/purchase', new PurchaseController().create)
export default routes;
