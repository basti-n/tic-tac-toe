const express = require('express');
const resultRoutes = require('./routes/result');
const { serve, setup } = require('./swagger/init');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use('/api-docs', serve, setup());
app.use('/result', resultRoutes);

app.listen(port, () => console.log(`App listening on port ${port}.`));
