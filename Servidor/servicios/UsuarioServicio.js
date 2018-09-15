/**
 * Iniciar sesion en la aplicacion
 */
exports.login = function(req, res){
    // Obtenemos los parametro
    var username = req.params.username;
    var password = req.params.password
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM usuarios WHERE username = ? and password = ?',[username,password],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
                res.send({data:rows[0]});
         });
    });
};

/**
 * Lista de usuarios
 */
exports.listar = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM usuarios',function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
    
  };
  