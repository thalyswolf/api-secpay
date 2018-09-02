'use strict'

const repository = require('../repositories/pagamento-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.create = async(req,res,next) =>{
  try {
      //recupera o token
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      console.log(req.body.status);
      //decodifica o token
      const data = await authService.decodeToken(token);
      await repository.create({
        usuarioid:req.body.usuarioid,
        status:req.body.status,
        site:req.body.site,
        produto_id:req.body.produto_id
      })
      res.status(201).send({message: 'Pagamento cadastrado'});
  } catch (e) {
    res.status(400).send({
      message:'Falha na requisição' + e
    })
  }
};

exports.confirmar = async(req,res,next) =>{
  try {
      //recupera o token
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      console.log(req.body.status);
      //decodifica o token
      const data = await authService.decodeToken(token);
      await repository.confirmar(req.body.usuarioid, {
        usuarioid:req.body.usuarioid,
        status:req.body.status,
        site:req.body.site,
        produto_id:req.body.produto_id
      })
      res.status(201).send({message: 'Pagamento atualizado'});
  } catch (e) {
    res.status(400).send({
      message:'Falha na requisição' + e
    })
  }
};
