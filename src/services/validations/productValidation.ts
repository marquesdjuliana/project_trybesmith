import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '"name" must be a string',
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  price: Joi.string().min(3).required().messages({
    'string.base': '"price" must be a string',
    'string.empty': '"price" is required',
    'string.min': '"price" length must be at least 3 characters long',
  }),
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