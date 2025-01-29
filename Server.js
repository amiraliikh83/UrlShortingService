const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use('/api/urls', urlRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
