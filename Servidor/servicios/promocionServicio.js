/**
 * Lista de promociones
 */
exports.listar = function(req, res){
    req.getConnection(function(err,connection){
          var query = connection.query('SELECT * FROM promocion',function(err,rows){
              if(err)
                    console.log("Error Selecting : %s ",err );
                    res.send({data:rows});  
                    console.log(rows);
           });
      });
};

/**
 * Lista de inmubles con promociones
 */
exports.listarInmuPromo = function(req, res){
      req.getConnection(function(err,connection){
            var query = connection.query('select * from inmueble i right join  promocion p on i.promocion=p.id inner join ciudades c on c.id = i.ciudad inner join departamentos d on d.id=c.departamento inner join archivo_inmueble ai on ai.inmueble=i.id where (p.fecha_inicio <= sysdate() and p.fecha_fin >= sysdate())  and i.estado=1;',function(err,rows){
                if(err)
                      console.log("Error Selecting : %s ",err );
                      res.send({data:rows});  
                      console.log(rows);
             });
        });
  };