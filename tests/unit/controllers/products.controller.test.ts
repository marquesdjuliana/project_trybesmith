import productsController from ',,/../../src/controller/products.controller';
import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { ProductInputtableTypes } from '../../../src/database/models/product.model';
import productsService from '../../../src/services/products.service';
import { Product } from '../../../src/types/Product';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import productsMock from '../../mocks/products.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = sinon.stub();
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('should respond with status 200 and a list of products when making a GET request to /products', async function () {
    // arrange:
    const successfulServiceResponse: ServiceResponse<Product[]> = {
      status: 'SUCCESSFUL',
      data: productsMock.trybesmithProducts,
    };
    sinon.stub(productsService, 'listAllProducts').resolves(successfulServiceResponse);
  
    // act:
    await productsController.listAllProducts(req, res, next);
    
    // assert:
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(productsMock.trybesmithProducts);
  });
 
  it('should respond with status 201 and the created product when receiving a valid product', async function () {
    // arrange:
    req.body = productsMock.productRequest;
  
    const createProductStub = sinon.stub(productsService, 'createProduct');
    createProductStub.callsFake(async (productInfo: ProductInputtableTypes) => {
      const createdProduct: Product = {
        id: 123, 
        ...productInfo,
      };
  
      const serviceResponse: ServiceResponse<Product> = {
        status: 'CREATED',
        data: createdProduct,
      };
  
      return Promise.resolve(serviceResponse);
    });
  
    // act:
    await productsController.createProduct(req, res, next);
  
    // assert:
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithMatch({ id: 123, ...productsMock.productRequest });
  });
});
