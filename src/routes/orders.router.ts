import { Router } from 'express';
import ordersController from '../controller/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.listAllOrders);

export default ordersRouter;