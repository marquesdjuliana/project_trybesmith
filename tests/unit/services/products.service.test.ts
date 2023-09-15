import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsService from '../../../src/services/products.service';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should add a product successfully and respond with status 201 and the product', async function () {
    // arrange:
    const productRequest = productsMock.productRequest;
    const mockProduct = ProductModel.build(productsMock.productResponse);
    sinon.stub(ProductModel, 'create').resolves(mockProduct);
  
    // act:
    const serviceResponse = await productsService.createProduct(productRequest);
  
    // assert:
    expect(serviceResponse.status).to.equal('CREATED');
    expect(serviceResponse.data).to.eql(productsMock.productResponse);
  });
  it('should successfully retrieve all products and respond with status 200 and the list of products', async function () {
    // arrange:
    const mockList = productsMock.trybesmithProducts.map( (product)=> ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(mockList);
  
    // act:
    const serviceResponse = await productsService.listAllProducts();
  
    // assert:
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.be.eql(productsMock.trybesmithProducts);
  });
});
