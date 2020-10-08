const express = require('express');
const cors = require('cors');
const resultRoutes = require('./routes/result');
const { serve, setup } = require('./swagger/init');

const app = express();
const port = process.env.PORT || 5000;
const host = '0.0.0.0';

app.set('port', port);

app.use(express.json());
app.use(cors());
app.use('/api-docs', serve, setup());
app.use('/result', resultRoutes);

app.listen(port, host, () => console.log(`App listening on port ${port}.`));
