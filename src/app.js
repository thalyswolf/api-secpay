'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config');
var cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:false }));

//habilita o cors
app.use(cors());

//conecta ao banco
mongoose.connect(config.connectionString);

//carrega os modelos
const Pessoa = require('./models/pessoa-model');
const Cartao = require('./models/cartao-model');
const Pagamento = require('./models/pagamento-model');


//carrega as rotas
const index = require('./routes/index');
const pessoaRoute = require('./routes/pessoa-route');
const cartaoRoute = require('./routes/cartao-route');
const pagamentoRoute = require('./routes/pagamento-route');

app.use('/', index);
app.use('/pessoas', pessoaRoute);
app.use('/cartao', cartaoRoute);
app.use('/pagamento', pagamentoRoute);

module.exports = app;
