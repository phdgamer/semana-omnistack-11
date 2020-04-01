const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes'); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
GET: Busca informações
POST: Criar Uma informação
PUT: Alterando uma informação
DELETE: Deletar uma informação
*/ 

/**
 * Tipos de parâmetros:
 * 
 * Query params: parâmetros nomeados enviados na rota apos o "?" para: filtros,
 * paginação
 * 
 * Route params: Parâmetros utilizados para identificar recursos
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, Oracle
  * NoSQL: MongoDB, CouchDB, etc
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

// app.listen(3333);
module.exports = app;