module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da var local';
    next();
}