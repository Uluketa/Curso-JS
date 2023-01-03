const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));