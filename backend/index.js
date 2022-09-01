const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

//const url = "mongodb://localhost:27017";
const url = "mongodb+srv://admin:CPr6UTMcf2C3dUbl@cluster0.fi33ipb.mongodb.net/"
const dbName = "fullstack-mario-game"

//realizar conexão com MongoClient
//Mongo client -> MongoDatabse -> Mongo Collection
//conexões com o cliente podem levar um tempo pra concluir.
//Portanto utilizamremos as promises do JS. 



//sinalizar express que estamos utilizando json
async function main(){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("pontuacoes");

  const app = express();
  app.use(cors());
  app.use(express.json());


  app.get("/", function(req, res){
    res.send("Hello World")
  }); 
  // Nosso backend armazena as pontuaçÕes jogadas
  //criar lista com as pontuações

  //Endpoint READ ALL - [GET]
  app.get("/pontuacoes", async function(req, res){
    const items = await collection
    .find()
    .sort({ pontos: -1 })
    .limit(10)
    .toArray();
    res.send(items);
  }); 
  //Endpoint CREATE - [POST] 

  app.post("/pontuacoes", async function(req, res){
    const item = req.body;
    await collection.insertOne(item); 

    res.send(item);

  }); 

  app.listen(process.env.PORT || 3333, ()=>{
    console.log("Aplicação rodando");
  });

}

main();