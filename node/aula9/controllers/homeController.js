exports.paginaInicial = (req, res) => {
res.send(`
    <h1>Welcome</h1><br />

    <form method="post" action="/">
        Nome: <input type="text" name="nome"></br>
        Idade: <input type="number" name="idade"></br></br>
        <input type="submit" name="submit" value="Enviar">
    </form>`);
}

exports.trataPosts = (req, res) => {
    res.send('Chegamos aqui');
}