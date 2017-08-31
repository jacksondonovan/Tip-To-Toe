const express = require('express')
const router = express.Router();
const knex = require('knex')
const linkQuery = require('../db/linkQuery')

router.get('/',(req,res)=>{
  res.render('deals')
})

router.post('/',(req,res)=>{
  linkQuery.insertUserInfo(req.body).then(()=>{
    res.redirect('/deals')
  })
})

module.exports = router;
