const { getMostrarLivros, getLivroID, postNovoLivro, modificaLivros, retirarLivro } = require("../serviços/livroServiços.js")

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
        if(id && Number(id)){
            const livroFilterId = getLivroID(id)
            res.send(livroFilterId)
        } else{
            res.status(422)
            res.send("id invalido")
        }
       
    } catch (error) {
        res.status(500)
        res.send(erro.message)
        
    }
}
function postLivro(req,res){
    try {
        const livroNovo = req.body

        if(req.body.nome){
            postNovoLivro(livroNovo)
        res.status(201)
        res.send("livro enviado com sucesso")
        } else{
            res.status(422)
            res.send("Campo nome obrigatório")
        }
        
    } catch (error) {
        res.status(500)
        res.send(erro.message)
        
    }
}
function patchLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            modificaLivros(body, id)
            res.send("Item modificado com sucesso")
        } else{
            res.status(422)
            res.send("id invalido")
        }
       
    } catch (error) {
        res.status(500)
        res.send(erro.message)
    }
}
function deleteLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)){
            retirarLivro(id)
            res.send("livro Retirado")
            
        }else{
            res.status(422)
            res.send("id invalido")
        }
        
       
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
    patchLivro,
    deleteLivro
}