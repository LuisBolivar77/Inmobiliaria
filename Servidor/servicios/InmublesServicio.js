/**
 * Registrar un inmueble
 */
exports.registrarInmueble = function(req, res){
    var data = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        // Construimos el objeto inmueble que se va a registrar
        var inmueble = {
            cedula: data.persona.cedula,
            nombre: data.persona.nombre,
            apellido: data.persona.apellido,
            fecha_nacimiento: data.persona.fecha_nacimiento,
            telefono: data.persona.telefono,
            direccion: data.persona.direccion,
            rol: data.persona.rol.id,
        };
        // Validamos si ya existe una persona con el numero de cedula o telefono
        var sql = "SELECT * FROM personas WHERE cedula = ? OR telefono = ?";
        var validaPersona = connection.query(sql,[persona.cedula, persona.telefono], function(err, rows){
            // validamos si se presento error
            if(err){
                res.send({data:"Error al validar la persona"});
                return;
            }
            // validamos si se encuentro algun registro de persona
            if(rows.length > 0){
                res.send({data:"Ya hay una persona registrada con esta cedula y/o telefono"});
                return;
            }
            // Validamos si el usuario ya existe
            var sql2 = "SELECT * FROM usuarios WHERE username = ?";
            var validaUsuario = connection.query(sql2,[data.username], function(err, rows){
                // validamos si se presento error
                if(err){
                    res.send({data:"Error al validar el usuario"});
                    return;
                }
                // validamos si se encuentro algun registro de usuario
                if(rows.length > 0){
                    res.send({data:"El username '"+data.username+"' ya esta en uso"});
                    return;
                }
                // Guardamos la persona
                var queryPersona = connection.query("INSERT INTO personas set ? ",persona, function(err, rows){
                    if (err){
                        res.send({data:"Error al guardar la persona"});
                        console.log(persona);
                        console.log(err);
                        return;
                    }
                    // Buscamos la persona que se guardo
                    var buscarPersona = connection.query('SELECT * FROM personas WHERE cedula = ?',[persona.cedula],function(err,rows){
                        if(err){
                            res.send({data:"Error al buscar la persona guardada"});
                            return;
                        }
                        if(rows.length == 0){
                            res.send({data:"La persona guardada no se encontro"});
                            return;
                        }
                        // Obtenemos el id de la persona creada
                        var idPersonaBuscada = rows[0].id;
                        // Construimos el objeto usuario para registrarlo en la bd
                        var usuario = {
                            persona: idPersonaBuscada,
                            username: data.username,
                            password: data.password,
                        };
                        // Guardamos el usuario de la persona
                        var queryUsuario = connection.query("INSERT INTO usuarios set ? ",usuario, function(err, rows){
                            if (err){
                                res.send({data:"Error al guardar el usuario"});
                                return;    
                            }else{
                                res.send({data:"exito"});
                                return;    
                            }
                        });
                    });
                });
            });     
        });
    });
};