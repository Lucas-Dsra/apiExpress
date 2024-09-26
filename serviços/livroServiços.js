const fs = require('fs')

function getMostrarLivros(){
    return JSON.parse(fs.readFileSync("./livros.json"))
}
function getLivroID(id){
    const livro = JSON.parse(fs.readFileSync("./livros.json"))
    const livroFiltrado = livro.filter(livro => livro.id === id)[0]
    return livroFiltrado
}
function postNovoLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("./livros.json"))
    const addLivroList = [...livros, livroNovo]
    fs.writeFileSync("./livros.json", JSON.stringify(addLivroList))
}

function modificaLivros(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"))

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("./livros.json", JSON.stringify(livrosAtuais))
}

function retirarLivro(id){
    const livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"))
    const livroFiltrado = livrosAtuais.filter(livro => livro.id !== id)
    fs.writeFileSync("./livros.json", JSON.stringify(livroFiltrado))
}

module.exports = {
    getMostrarLivros,
    getLivroID,
    postNovoLivro,
    modificaLivros, 
    retirarLivro,
}

