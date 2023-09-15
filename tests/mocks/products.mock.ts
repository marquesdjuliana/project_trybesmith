import { ProductInputtableTypes } from "../../src/database/models/product.model";

const productRequest = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
}

const productResponse = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
} as ProductInputtableTypes;

const trybesmithProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4
  },
  {
    id: 2,
    name: 'Lança do Destino',
    price: '100 diamantes',
    orderId: 4
  }
]

export default {
  productRequest,
  productResponse,
  trybesmithProducts,
}