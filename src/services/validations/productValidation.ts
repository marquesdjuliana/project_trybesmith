import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(0).required(),
  orderId: Joi.number().integer().required(),
});

export const validateProduct = (productInfo: unknown): Joi.ValidationError | undefined => {
  const { error } = productSchema.validate(productInfo);
  if (error) { return error; }
};

export default {
  productSchema,
  validateProduct,
};