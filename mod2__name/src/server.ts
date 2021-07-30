import express from 'express';

import { categoriesRouter } from './routes/categories.routes';

const app = express();
app.use(express.json());
app.get('/', (request, response) => {
  return response.json({ message: 'Hellow World !' });
});

app.use('/categories', categoriesRouter);

app.listen(3333, () => {
  console.log('API Running !');
});
