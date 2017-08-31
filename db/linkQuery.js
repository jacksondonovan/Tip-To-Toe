const knex = require('./knex')

function insertUserInfo(obj){
  return knex('tttemails').insert(obj)
}

module.exports = {
  insertUserInfo
};
