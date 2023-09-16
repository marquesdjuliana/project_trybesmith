
const trybesmithOrders = [
  {
    id: 1,
    userId: 1,
    productIds: [2, 1],
  },
  {
    id: 2,
    userId: 3,
    productIds: [4, 3],
  },
]

const ordersWithEmptyProductIds = [
  {
    id: 1,
    userId: 1,
    productIds: [],
  },
  {
    id: 2,
    userId: 3,
    productIds: [],
  },
];
export default {
trybesmithOrders,
ordersWithEmptyProductIds,
};