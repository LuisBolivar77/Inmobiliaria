
/**
 * Module dependencies.
 */

var express = require('express');
var servicios = require('./servicios');
var http = require('http');
var path = require('path');

// --------- SERVICIOS ------------ //

// servicios de usuario
var usuarioServicio = require('./servicios/UsuarioServicio')

// -------------END --------------- //

var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3306');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
    connection(mysql,{
        
        host: 'localhost', //'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'inmobiliaria'

    },'pool') //or single
);

app.get('/', servicios.index);
app.get('/usuarios/regitrarUsu', usuario.registrarUsu);

// ------- Ruta para los Servicios de Usuario -------- //
app.get('/usuarios/login/:username/:password', usuarioServicio.login);
app.get('/usuarios/listar', usuarioServicio.listar);
// ------------ END -----------------------------------//

app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
