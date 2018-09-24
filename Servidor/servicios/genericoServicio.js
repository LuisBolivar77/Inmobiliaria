/**
 * Lista de una tabla determinada
 */
exports.listar = function(req, res){
    // Objetenmos los datos enviados desde el cliente
    var data = JSON.parse(JSON.stringify(req.body));
    // Tabla donde va a ir a consultar
    var tabla = data.tabla;
    // Objeto con los parametros a filtrar
    var parametros = data.objeto;
    // La consulta a ejecutar
    var sql = "SELECT * FROM "+tabla;
    if(parametros != null){
      sql += " WHERE ";
      for (var key in parametros) {
            sql += key+" = "+parametros[key];
      }
    }
    // Ejecutamos la consulta y retornamos
    req.getConnection(function(err,connection){
          var query = connection.query(sql,function(err,rows){
              if(err){
                  res.send({err});
                  console.log("Error Selecting : %s ",err );
              }else{
                  res.send({data:rows});
              }
           });
      });
};

/**
 * Guardar en una tabla determinada
 */
exports.guardar = function(req, res){
      // Objetenmos los datos enviados desde el cliente
      var data = JSON.parse(JSON.stringify(req.body));
      // Tabla donde va a ir a guardar
      var tabla = data.tabla;
      // El Objeto enviado desde el cliente
      var elObjeto = data.objeto;
      // Construimos el objeto a guardar
      var objeto = {};
      // Llenamos el objeto con los datos de elObjeto
      for (var key in elObjeto) {
            // Validamos si el atributo es un objeto
            if(typeof elObjeto[key] === "object"){
                  // Como es un objeto, solo obtenemos el id para la foranea
                  objeto[key] = obtenerId(elObjeto[key]);
            }else{
                  objeto[key] = elObjeto[key];
            }
      }
      // La consulta a ejecutar
      var sql = "INSERT INTO "+tabla+" set ? ";
      // Ejecutamos la consulta y retornamos
      req.getConnection(function(err,connection){
            var query = connection.query(sql,objeto,function(err,rows){
                if(err){
                  res.send({data:"no se pudo guardar, intente de nuevo. "+err.code});
                }else{
                  res.send({data:"exito", id:rows.insertId});
                }
            });
      });
};

/**
 * obtiene el id de un objeto foranea
 */
function obtenerId(objeto){
      // el id del objeto primario
      var id;
      for (var key in objeto) {
            // Validamos si es un objeto
            if(typeof objeto[key] === "object"){
                  for (var key2 in objeto[key]) {
                        if(key2 == "id"){
                              id = objeto[key][key2];
                        }
                  }
            }else{
                  // Validamos si el atributo es un objeto
                  if(key == "id"){
                        id = objeto[key];
                  }
            }
      }
      return id;
}

/**
 * Editar de una tabla determinada
 */
exports.editar = function(req, res){
      // Objetenmos los datos enviados desde el cliente
      var data = JSON.parse(JSON.stringify(req.body));
      // Tabla donde va a ir a guardar
      var tabla = data.tabla;
      // Objeto que se va a guardar
      var objeto = data.objeto;
      // La consulta a ejecutar
      var sql = "UPDATE "+tabla+" set ? WHERE "+objeto.key(0)+" = ?";
      // Ejecutamos la consulta y retornamos
      req.getConnection(function(err,connection){
            var query = connection.query(sql,[objeto, objeto[0]],function(err,rows){
                if(err){
                  res.send({data:"no se pudo editar, intente de nuevo. "+err.code});
                }else{
                  res.send({data:"exito"});
                }
            });
      });
};

/**
 * Busca de una tabla determinada
 */
exports.buscar = function(req, res){
      // Objetenmos los datos enviados desde el cliente
      var data = JSON.parse(JSON.stringify(req.body));
      // Tabla donde va a ir a consultar
      var tabla = data.tabla;
      // Objeto con los parametros a filtrar
      var parametros = data.objeto;
      // La consulta a ejecutar
      var sql = "SELECT * FROM "+tabla;
      if(parametros != null){
        sql += " WHERE ";
        var sum = 0;
        // cantidad de parametros en el objeto
        var size = Object.keys(parametros).length;
        for (var key in parametros) {
            if(sum != 0 && sum != size){
                  sql += " AND ";
            }
            sql += key+" = "+parametros[key];
            sum++;
        }
      }
      // Ejecutamos la consulta y retornamos
      req.getConnection(function(err,connection){
            var query = connection.query(sql,function(err,rows){
                  if(err){
                        res.send({err});
                  }else{
                        res.send({data:rows[0]});
                  }
            });
        });
  };