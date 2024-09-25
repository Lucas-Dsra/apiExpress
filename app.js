const express  = require ("express")
const app = express();
app.use(express.json())

const rotas = require("./rotas/livroRota.js")

app.use('/livros',rotas)

const port = 8000;

app.get('/', (req, res) =>{
    res.send("Get Funcionando");
});

app.listen(port, () => {
    console.log("escutando porta 8000");
})