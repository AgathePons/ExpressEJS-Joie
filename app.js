const express = require('express');
const router = require('./app/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);

app.use(function (req, res, next) {
  res.render('notFound');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`linstening on ${PORT}`);
});