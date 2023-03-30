const express = require('express')
const app = express()

const hostname = 'localhost'
const PORT = 3000

/* ---- Configuração do express ---- */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// arquivos estáticos
app.use(express.static('public'))
/* ----------------------------------*/

/* ---- Programação das rotas ---- */

app.get('/', (req,res)=>{
    res.render('index.html')
})
/* ----------------------------------*/

/* ---- Server => Porta 3000--------- */
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor Rodando em ${hostname}:${PORT}`)
})
/* ----------------------------------*/