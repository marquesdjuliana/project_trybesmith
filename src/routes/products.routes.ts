import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.get('/', productsController.listAllProducts);
productsRouter.post('/', productsController.createProduct);
export default productsRouter;