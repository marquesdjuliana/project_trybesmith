import { RequestHandler } from 'express';
import productsService from '../services/products.service';
import { validateProduct } from '../services/validations/productValidation';
import mapStatusHTTP from '../utils/mapSatusHTTP';

const createProduct: RequestHandler = async (req, res) => {
  const { body } = req;

  const validationError = validateProduct(body);
  if (validationError) {
    if (validationError.details[0].type === 'any.required') {
      return res.status(400).json({ message: validationError.details[0].message });
    }
    return res.status(422).json({ message: validationError.details[0].message });
  }
  const { status, data } = await productsService.createProduct(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const listAllProducts: RequestHandler = async (_req, res) => {
  const { status, data } = await productsService.listAllProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  createProduct,
  listAllProducts,
};