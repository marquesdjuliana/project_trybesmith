import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersService from '../../../src/services/orders.service';
import ordersMock from '../../mocks/orders.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should successfully retrieve all orders and respond with status 200 and the list of orders', async function () {
    // arrange:
    const mockOrdersList = ordersMock.trybesmithOrders
    .map((order) => { const orderWithProductIds = OrderModel.build(order);
      orderWithProductIds.dataValues.productIds = order.productIds;
      return orderWithProductIds;
    });
    sinon.stub(OrderModel, 'findAll').resolves(mockOrdersList);
  
    // act:
    const serviceResponse = await ordersService.listAllOrders();
  
    // assert:
    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.be.deep.equal(ordersMock.trybesmithOrders);
  });
});
