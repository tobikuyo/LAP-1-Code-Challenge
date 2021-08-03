const express = require('express');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');

const app = express();
app.use(cors());
app.use('/api/recipes', recipeRoutes);

module.exports = app;
