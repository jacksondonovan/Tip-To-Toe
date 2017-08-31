const knex = require('./knex')

function insertUserInfo(obj){
  return knex('tttemails').insert(obj)
}

function allUsers(obj){
  return knex('tttemails').select().where('full_name',obj)
}

module.exports = {
  insertUserInfo,
  allUsers
};
