const {connectAndExecuteQuery} = require("./connection");

function getAll(callback){

  const sql = 'SELECT * FROM `companies` WHERE 1';
  
  connectAndExecuteQuery(sql, callback)
}

// Exportar las funciones para su uso en otros archivos
module.exports = { 
  getAll
};