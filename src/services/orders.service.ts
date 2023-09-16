import orderModel from '../database/models/order.model';
import productModel from '../database/models/product.model';
import type { Order } from '../types/Order';
import type { ServiceResponse } from '../types/ServiceResponse';

const listAllOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const orders = await orderModel.findAll({
    include: [{ model: productModel, as: 'productIds', attributes: ['id'] }],
  });
  
  const data = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues
      .productIds?.map((product) => (typeof product !== 'number' ? product.id : product)) || [],
  }));
  return { status: 'SUCCESSFUL', data };
};

export default {
  listAllOrders,
};
