require('dotenv').config();

const express = require('express')
const app = express()

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado a base de dados');
        app.emit('connected')
    })
    .catch(err => console.log(err));

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

app.on('connected', () => {
    app.listen(port, () => console.log(`App listening on port ${port}! \nlocalhost:${port}`));
})