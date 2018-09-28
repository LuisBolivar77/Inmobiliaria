-- ROLES -- 
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Administrador', 'administrador');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Cliente', 'cliente');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Empleado', 'empleado');

-- PERSONAS --
INSERT INTO `inmobiliaria`.`personas` (`cedula`, `nombre`, `apellido`, `telefono`, `direccion`, `rol`) VALUES ('1094', 'Carlos', 'Martinez', '3138920011', 'carrera 14 #4567', '1');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('2', '1090', 'Camila', 'Torres', '1989-02-02', '3214567890', 'calle 2 Norte', '3');

-- USUARIOS --
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('1', 'admin', '123');
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('2', 'camila', 'torres123');

-- Accesos --
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('1', 'Gestionar Personas', 'administracion/gestionar-personas');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('2', 'Gestionar Empleados', 'administracion/gestionar-empleados');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('3', 'Gestionar Clientes', 'administracion/gestionar-clientes');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('4', 'Gestionar Administradores', 'administracion/gestionar-administradores');


-- Rol_Accesos --
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '1');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '2');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '3');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '4');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('3', '3');

-- Cargos --
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Contador', 'es el que cuenta');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Administrador Ventas', 'es el que administra las ventas');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Secretario', 'es el que secretarea');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Auxiliar de Visitas', 'es el que realiza las visitas');

-- Empleados --
INSERT INTO `inmobiliaria`.`empleados` (`usuario`, `salario`, `cargo`) VALUES ('2', '1200000', '2');

-- Departamentos --

INSERT INTO `inmobiliaria`.`departamentos` (`nombre`) VALUES ('Quindio');
INSERT INTO `inmobiliaria`.`departamentos` (`nombre`) VALUES ('Risaralda');
INSERT INTO `inmobiliaria`.`departamentos` (`nombre`) VALUES ('Cundinamarca');
INSERT INTO `inmobiliaria`.`departamentos` (`nombre`) VALUES ('Antioquia');
INSERT INTO `inmobiliaria`.`departamentos` (`nombre`) VALUES ('Nariño');

-- Ciudadades --

INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Calarca', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Circacia', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Filandia', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Pereira', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Manizales', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Dos Quebradas', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Sanra rosa del cabal', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Bogota', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Fusagasuga', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Cajica', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Cota', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Medellin', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Zaragoza', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('La ceja', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Puerto berrio', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Pasto', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Tumaco', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('La union', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('El peñol', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`nombre`, `departamento`) VALUES ('Nariño', '5');


