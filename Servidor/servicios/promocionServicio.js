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