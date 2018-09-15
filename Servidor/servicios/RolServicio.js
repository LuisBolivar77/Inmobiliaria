/**
 * Lista de roles
 */
exports.listar = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM roles',function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};

/**
 * Lista de Accesos
 */
exports.listarAccesos = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM accesos',function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};

/**
 * Lista de Rol Accesos
 */
exports.ListarRolAccesos = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM rol_accesos',function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};

/**
 * Lista de Accesos por Rol
 */
exports.accesosPorRol = function(req, res){
    // Obtenemos los parametro
    var rol = req.params.rol;
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT a.* FROM rol_accesos ra JOIN accesos a ON a.id = ra.rol WHERE rol = ?',[rol],function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};