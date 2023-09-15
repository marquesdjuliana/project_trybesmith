import { RequestHandler } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapSatusHTTP';

const createProduct: RequestHandler = async (req, res) => {
  const { body } = req; 
  const { status, data } = await productsService.createProduct(body);
  return res.status(mapStatusHTTP(status)).json(data);
};
export default {
  createProduct,
};