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

exports.registrarUsu = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            cedula  : input.cedula,
            name    : input.nombre,
            apellido: input.apellido,
            telefono: input.telefono,
            direccion: input.direccion,
            fecha: input.fecha,
            rol: input.rol 
        };
        var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
        {
          if (err)
                console.log("Error inserting : %s ",err );
                res.send('{"id": 505,"msj": "Se registro correctamente"}');
        });
        console.log(query.sql); //get raw query
    });
};

/**
 * Buscar usuario por persona
 */
exports.usuarioByPersona = function(req, res){
    var persona = req.params.persona;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM usuarios WHERE persona = ?',[persona],function(err,rows){
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

/**
 * Buscar persona por id
 */
exports.personaById = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM personas WHERE id = ?',[id],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
                res.send({data:rows[0]});
         });
    });
};

/**
 * Buscar persona por cedula
 */
exports.personaByCedula = function(req, res){
    var cedula = req.params.cedula;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM personas WHERE cedula = ?',[cedula],function(err,rows){
            if(err)
                console.log("Error Selecting : %s ",err );
                res.send({data:rows[0]});
         });
    });
};

/**
 * Lista de personas
 */
exports.listarPersonas = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM personas',function(err,rows){
                if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};
  
