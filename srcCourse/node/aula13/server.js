const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');
const path = require('path');
const meuMiddleWare = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(meuMiddleWare);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));