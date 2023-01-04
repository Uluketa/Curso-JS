// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Titulo1',
//     descricao: 'Descrição'
// })
//     .then(dados => console.log(dados)).
//     catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index', {
        // titulo: 'Este sera o titulo',
        numeros: [ 0, 1, 2, 35, 66, 8876 ]
    });
}

exports.trataPosts = (req, res) => {
    res.send(req.body);
}