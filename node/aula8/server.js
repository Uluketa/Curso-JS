const express = require('express')
const app = express()
const port = 3000

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.get('/', (req, res) => res.send(`
<h1>Welcome</h1><br />

    <form method="post" action="/">
        Nome: <input type="text" name="nome"></br>
        Idade: <input type="number" name="idade"></br></br>
        <input type="submit" name="submit" value="Enviar">
    </form>`));

app.post('/', (req, res) => res.send(`Você digitou nome: ${req.body.nome} e idade: ${req.body.idade}`));

app.get('/testes/:idade?', (req, res) => {
    res.send( req.query);
})

// http://localhost:3000/testes/12?nome=Lucas&sobrenome=Miguel

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 