exports.paginaInicial = (req, res) => {
res.render('index');
}

exports.trataPosts = (req, res) => {
    res.send('Chegamos aqui');
}