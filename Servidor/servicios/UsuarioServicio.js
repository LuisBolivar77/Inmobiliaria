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