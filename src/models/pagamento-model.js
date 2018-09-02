'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  usuarioid:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  site:{
    type:String,
    required:true
  },
  produto_id:{
    type:String,
    required:true
  }
});


module.exports = mongoose.model("Pagamento", schema);
