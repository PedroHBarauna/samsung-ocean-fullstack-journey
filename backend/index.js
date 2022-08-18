const express = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "jornada-fullstack-agosto-22"

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

  app.use(express.json());

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

  app.listen(process.env.PORT || 3000, ()=>{
    console.log("aplicação rodando");
  });

}

main();