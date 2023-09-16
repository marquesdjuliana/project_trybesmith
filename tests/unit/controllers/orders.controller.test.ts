import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ordersController from '../../../src/controller/orders.controller';
import ordersService from '../../../src/services/orders.service';
import { Order } from '../../../src/types/Order';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import ordersMock from '../../mocks/orders.mock';
chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = sinon.stub();
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('should respond with status 200 and a list of orders when making a GET request to /orders', async function () {
    // arrange:
    const successfulServiceResponse: ServiceResponse<Order[]> = {
      status: 'SUCCESSFUL',
      data: ordersMock.trybesmithOrders,
    };
    sinon.stub(ordersService, 'listAllOrders').resolves(successfulServiceResponse);
  
    // act:
    await ordersController.listAllOrders(req, res, next);
    
    // assert:
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(ordersMock.trybesmithOrders);
  });
});
