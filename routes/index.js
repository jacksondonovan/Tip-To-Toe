const express = require('express')
const router = express.Router()
const knex = require('knex')

//mounted at /emailsubmit

// router.get('/',(req,res)=>{
//   res.render('/index')
// })
//
// router.post('/',(req,res)=>{
//   knex('tttemails').insert(req.body).then(()=>{
//     console.log('anything?');
//     res.redirect('/')
//   })
// })

module.exports = router;
