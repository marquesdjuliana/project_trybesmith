import express from 'express';
import ordersRouter from './routes/orders.router';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.get('/', (_req, res) => {
  res.status(200).send('Aplicação está atualizando dentro do docker!');
});
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
export default app;
