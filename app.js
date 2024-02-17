const express = require('express');

const feedRoutes = require('./routes/feed');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/feed', feedRoutes);

app.listen(8080);
