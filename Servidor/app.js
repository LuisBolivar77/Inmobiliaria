
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load customers route
var customers = require('./routes/customers'); 
//load usuarios route
var usuarios = require('./routes/usuarios');
//servicios finales
var usuario = require('./servicios/UsuarioServicio')

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
        password : 'root',
        port : 3306, //port mysql
        database:'Inmobiliaria'

    },'pool') //or single

);



app.get('/', routes.index);

// ------- Servicios de Usuario -------- //
app.get('/usuarios/login', usuario.login);

// ------- Servicios de customer ------- //
app.get('/customers', customers.list);
app.post('/customers/add', customers.save);
app.post('/customers/addlogin', customers.savelogin);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/search/:id', customers.search);
app.post('/customers/edit/',customers.save_edit);

// ------- Servicios de usuario ------- //
app.get('/usuarios', usuarios.list);
app.get('/usuarios/search/:id', usuarios.search);
app.post('/usuarios/edit/',usuarios.edit);
app.get('/usuarios/delete/:id', usuarios.delete_usuario);
app.post('/usuarios/addlogin', usuarios.savelogin);




app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
