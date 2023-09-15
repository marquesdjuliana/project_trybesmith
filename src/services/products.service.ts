import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductResponse } from '../types/Product';
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
  // return { status: 'CREATED', data: product.dataValues };
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

export default {
  createProduct,
};