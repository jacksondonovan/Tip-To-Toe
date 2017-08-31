const express = require('express')
const router = express.Router();
const knex = require('knex')
const linkQuery = require('../db/linkQuery')

router.get('/:full_name',(req,res)=>{
  linkQuery.allUsers(req.params.full_name).first().then((user)=>{
    res.render('deals',{name: user.full_name})
  })

})

router.post('/',(req,res)=>{
  linkQuery.insertUserInfo(req.body).then(()=>{
    res.redirect('/deals/' + req.body.full_name)
  })
})

module.exports = router;
