const express = require('express');
const app = express();

//sinalizar express que estamos utilizando json

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/oi', function(req, res){
    res.send('Olá Mundo');
});

// Nosso backend armazena as pontuaçÕes jogadas
//criar lista com as pontuações

const lista = [
  {
    "id": 1,
    "nome": "Pedro",
    "pontos": 90,
  },
  {
    "id": 2,
    "nome": "Paulo",
    "pontos": 120,
  },
  {
    "id": 3,
    "nome": "Cátia",
    "pontos": 50,
  },
];
//Endpoint READ ALL - [GET]
app.get("/pontuacoes", function(req, res){
  res.send(lista);
}); 
//Endpoint CREATE - [POST] 

app.post("/pontuacoes", function(req, res){
  const item = req.body;
  res.send("Criar uma pontuação");
  lista.push({
    id: lista.length+1,
    nome: item.nome,
    pontos: item.pontos,
  });
}); 

app.listen(3000);