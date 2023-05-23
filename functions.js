const {con} = require("./connection");

function getAll(callback){

  const sql = 'SELECT * FROM `companies` WHERE 1';
  
    con.query(sql, function (err, result) {
      if (err){
          console.error('Error en al consulta:', err)
          callback(err,null)
          return
      }
      callback(null, result)
    });
}

// Exportar las funciones para su uso en otros archivos
module.exports = { 
  getAll
};