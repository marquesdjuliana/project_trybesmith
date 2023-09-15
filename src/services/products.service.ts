import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product, ProductResponse } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import { validateProduct } from './validations/productValidation';

const createProduct = async (productInfo: ProductInputtableTypes):
Promise<ServiceResponse<ProductResponse>> => {
  const validationError = validateProduct(productInfo);
  if (validationError) {
    return {
      status: 'BAD_REQUEST',
      data: { message: validationError.details[0].message },
    };
  }
  const product = await ProductModel.create(productInfo);
  const responseService: ServiceResponse<ProductResponse> = {
    status: 'CREATED',
    data: {
      id: product.dataValues.id,
      name: product.dataValues.name,
      price: product.dataValues.price,
    },
  };

  return responseService;
};

const listAllProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const products = await ProductModel.findAll();
  const data = products.map((product) => product.dataValues);
  return { status: 'SUCCESSFUL', data };
};
export default {
  createProduct,
  listAllProducts,
};