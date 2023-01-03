const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`
    <form method="post" action="/">
        Nome: <input type="text" name="nome"></br>
        Idade: <input type="number" name="idade"></br>
        <input type="submit" name="submit" value="Enviar">
    </form>`));

app.post('/', (req, res) => res.send('Formulario recebido'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))