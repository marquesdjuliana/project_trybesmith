import { RequestHandler } from 'express';
import ordersService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapSatusHTTP';

const listAllOrders: RequestHandler = async (req, res) => {
  const { status, data } = await ordersService.listAllOrders();
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  listAllOrders,
};