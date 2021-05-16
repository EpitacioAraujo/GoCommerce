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
routes.put('/description/:id', new DescriptionController().update)

//Brands routes
routes.post('/brand', new BrandController().create)
routes.get('/brand/:id', new BrandController().read)
routes.put('/brand/:id', new BrandController().update)

//Products routes
routes.post('/product', new ProductController().create)
routes.get('/product/:id', new ProductController().read)
routes.put('/product/:id', new ProductController().update)

//Sallers routes
routes.post('/saller', new SallerController().create)
routes.get('/saller/:id', new SallerController().read)
routes.put('/saller/:id', new SallerController().update)

//Purchase routes
routes.post('/purchase', new PurchaseController().create)
routes.get('/purchase/:id', new PurchaseController().read)
routes.put('/purchase/:id', new PurchaseController().update)

export default routes;
