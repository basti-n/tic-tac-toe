const express = require('express');
const cors = require('cors');
const resultRoutes = require('./routes/result');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());
app.use('/result', resultRoutes);

app.listen(port, () => console.log(`App listening on port ${port}.`));
