const { getMostrarLivros, getLivroID, postNovoLivro, modificaLivros } = require("../serviços/livroServiços.js")

function getLivros(req, res) {
    try {
        const livros = getMostrarLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(erro.message)
    }
}
function pushLivros(req, res){
    res.send("solicitação Push")
}

function getSendLivroID(req, res){
    try {
        const id = req.params.id
        const livroFilterId = getLivroID(id)
        res.send(livroFilterId)
    } catch (error) {
        res.status(500)
        res.send(erro.message)
        
    }
}
function postLivro(req,res){
    try {
        const livroNovo = req.body
        postNovoLivro(livroNovo)
        res.status(201)
        res.send("livro enviado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(erro.message)
        
    }
}
function patchLivro(req, res){
    try {
        const id = req.params.id
        const body = req.body
        modificaLivros(body, id)
        res.send("Item modificado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(erro.message)
    }
}

module.exports = {
    getLivros,
    pushLivros,
    getSendLivroID,
    postLivro,
    patchLivro
}