const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 80

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);
app.use('/notes', htmlRoutes);
app.use('/api', apiRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})