import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'This API is Running' });
});

app.listen(3333, () => {
  console.log('API Running !');
});
