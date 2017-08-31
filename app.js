const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')
const knex = require('knex')

const deals = require('./routes/deals')

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'views')));


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/deals',deals)


app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port)
})

module.exports = app;
