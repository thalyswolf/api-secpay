'use strict'

const mongoose = require('mongoose');
const Pagamento = mongoose.model('Pagamento');


exports.get = async(data) => {
var res = await Pagamento.find({})
return res;
}
exports.create = async(data) => {
  var pagamento = new Pagamento(data);
  await pagamento
  .save();
}
exports.confirmar = async(id, data) => {
  const res = await Pagamento
  .findByIdAndUpdate(id,{
    $set:{
      usuarioid:data.usuarioid,
      status:data.status,
      site:data.site,
      produto_id:data.produto_id
    }
  });
  return res;
}
