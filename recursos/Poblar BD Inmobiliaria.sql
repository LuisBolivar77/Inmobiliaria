-- ROLES -- 
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Administrador', 'administrador');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Cliente', 'cliente');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Empleado', 'empleado');

-- PERSONAS --
INSERT INTO `inmobiliaria`.`personas` (`cedula`, `nombre`, `apellido`, `telefono`, `direccion`, `rol`) VALUES ('1094', 'Carlos', 'Martinez', '3138920011', 'carrera 14 #4567', '1');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('2', '1090', 'Camila', 'Torres', '1989-02-02', '3214567890', 'calle 2 Norte', '3');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('3', '1091', 'pedro', 'perez', '1989-02-03', '3214567', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('4', '1092', 'camilo', 'zapata', '1989-04-03', '3314567', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('5', '1093', 'laura', 'posada', '1989-07-03', '3214133345', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('6', '1094', 'daniela', 'rojas', '1989-09-03', '321456342317', 'calle 2 Norte', '2');

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

-- Tipos de Inmueble --
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Casa', 'casa');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Apartamento', 'apartamento');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Finca', 'Finca');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Oficina', 'Oficina');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('5', 'Local comercial', 'Local comercial');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('6', 'Bodega', 'Bodega');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('7', 'Chalet', 'Chalet');

-- CAMBIO TABLA INMUEBLE --
ALTER TABLE `inmobiliaria`.`inmueble` 
CHANGE COLUMN `direccion` `direccion` VARCHAR(100) NOT NULL AFTER `id`,
CHANGE COLUMN `detalles` `detalles` VARCHAR(400) NOT NULL AFTER `numero_matricula`,
CHANGE COLUMN `anoconstruccion` `anoconstruccion` VARCHAR(20) NOT NULL AFTER `detalles`,
CHANGE COLUMN `tipo_cortinas` `tipoCortinas` VARCHAR(100) NOT NULL AFTER `anoconstruccion`,
CHANGE COLUMN `habitaciones` `habitaciones` INT(11) NOT NULL AFTER `banios`,
CHANGE COLUMN `garajes` `garajes` INT(11) NOT NULL AFTER `habitaciones`,
CHANGE COLUMN `usuario` `usuario` INT(11) NOT NULL AFTER `garajes`,
CHANGE COLUMN `aprobacion_fecha` `fechaAprobacion` DATE NULL DEFAULT NULL AFTER `usuario`,
CHANGE COLUMN `ciudad` `ciudad` INT(11) NOT NULL AFTER `fechaAprobacion`,
CHANGE COLUMN `tipoAV` `tipoAV` INT(11) NOT NULL AFTER `ciudad`,
CHANGE COLUMN `zona` `zona` INT(11) NOT NULL AFTER `tipoAV`,
CHANGE COLUMN `tipo` `tipo` INT(11) NOT NULL AFTER `estado`,
CHANGE COLUMN `cuarto_servicio` `cuartoServicio` CHAR(1) NOT NULL AFTER `comedorIndependiente`,
CHANGE COLUMN `deposito` `deposito` CHAR(1) NOT NULL AFTER `cuartoServicio`,
CHANGE COLUMN `estudio` `estudio` CHAR(1) NULL DEFAULT NULL AFTER `deposito`,
CHANGE COLUMN `jardines` `jardines` CHAR(1) NOT NULL AFTER `estudio`,
CHANGE COLUMN `parqueadero` `parqueadero` CHAR(1) NOT NULL AFTER `jardines`,
CHANGE COLUMN `precio_negociable` `precioNegociable` CHAR(1) NOT NULL AFTER `parqueadero`,
CHANGE COLUMN `transporte_publico_cercano` `transporteCercano` CHAR(1) NOT NULL AFTER `precioNegociable`,
CHANGE COLUMN `zona_infantil` `zonaInfantil` CHAR(1) NOT NULL AFTER `vistaExterior`,
CHANGE COLUMN `zonas_humedas` `zonasHumedas` CHAR(1) NOT NULL AFTER `zonaInfantil`,
CHANGE COLUMN `zona_ropas` `zonaRopas` CHAR(1) NOT NULL AFTER `zonasHumedas`,
CHANGE COLUMN `canchas_deportivas` `canchasDepor` CHAR(1) NOT NULL ,
CHANGE COLUMN `vista_exterior_interior` `vistaExterior` CHAR(1) NOT NULL ;

-- Inmueble -- 
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 1', '123321', 'bella casa', '1983-09-28', 'melas', '12', '400000', '4', '12', '2', '3', '2018-09-28', '3', '1', '1', '1', '1', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 20', '321123', 'casa grande', '1983-09-28', 'de tela', '234', '500000', '2', '2', '2', '3', '2018-09-28', '3', '1', '0', '1', '5', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 30', '321231', 'casa pequeña', '1983-09-28', 'percianas', '23', '600000', '1', '3', '2', '4', '2018-09-28', '4', '1', '0', '1', '2', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrerra 40', '3213421', 'casa verde', '1983-09-28', 'percianas', '543', '2000000', '3', '4', '0', '4', '2018-09-28', '5', '1', '0', '1', '2', '1', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 50', '432123', 'casa roja', '1983-09-28', 'percianas', '123', '4000000', '4', '5', '2', '5', '2018-09-28', '6', '1', '1', '1', '4', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrerra 100', '2312451', 'casa moraada', '1983-09-28', 'percianas', '5645', '3000000', '5', '6', '1', '5', '2018-09-28', '7', '1', '0', '0', '3', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 24', '345211', 'casa azul', '1983-09-28', 'percianas', '234', '2000000', '2', '7', '0', '6', '2018-09-28', '8', '1', '1', '0', '5', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 34', '63123', 'casa gris', '1983-09-28', 'percianas', '423', '8000000', '3', '8', '3', '6', '2018-09-28', '2', '0', '0', '0', '4', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 43', '723131', 'casa sin techo', '1983-09-28', 'percianas', '564', '7000000', '1', '2', '0', '3', '2018-09-28', '7', '1', '1', '1', '2', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`direccion`, `numero_matricula`, `detalles`, `anoconstruccion`, `tipoCortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `fechaAprobacion`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchasDepor`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuartoServicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precioNegociable`, `transporteCercano`, `vistaExterior`, `zonaInfantil`, `zonasHumedas`, `zonaRopas`) VALUES ('carrera 27', '8123425', 'casa amarilla', '1983-09-28', 'percianas', '123', '9000000', '5', '2', '0', '5', '2018-09-28', '5', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '1', '1', '1', '1');

-- Archivo inmueble --
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_1.jpg', '12');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_2.jpg', '2');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_3.jpg', '11');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_4.jpg', '4');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_5.jpg', '5');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_6.jpg', '6');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_7.jpg', '7');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_8.jpg', '8');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_9.jpg', '9');

-- CAMBIO TABLA INMUEBLE --
ALTER TABLE `inmobiliaria`.`inmueble` 
CHANGE COLUMN `direccion` `direccion` VARCHAR(100) NOT NULL AFTER `id`,
CHANGE COLUMN `detalles` `detalles` VARCHAR(400) NOT NULL AFTER `numero_matricula`,
CHANGE COLUMN `anoconstruccion` `anoconstruccion` VARCHAR(20) NOT NULL AFTER `detalles`,
CHANGE COLUMN `tipo_cortinas` `tipoCortinas` VARCHAR(100) NOT NULL AFTER `anoconstruccion`,
CHANGE COLUMN `habitaciones` `habitaciones` INT(11) NOT NULL AFTER `banios`,
CHANGE COLUMN `garajes` `garajes` INT(11) NOT NULL AFTER `habitaciones`,
CHANGE COLUMN `usuario` `usuario` INT(11) NOT NULL AFTER `garajes`,
CHANGE COLUMN `aprobacion_fecha` `fechaAprobacion` DATE NULL DEFAULT NULL AFTER `usuario`,
CHANGE COLUMN `ciudad` `ciudad` INT(11) NOT NULL AFTER `fechaAprobacion`,
CHANGE COLUMN `tipoAV` `tipoAV` INT(11) NOT NULL AFTER `ciudad`,
CHANGE COLUMN `zona` `zona` INT(11) NOT NULL AFTER `tipoAV`,
CHANGE COLUMN `tipo` `tipo` INT(11) NOT NULL AFTER `estado`,
CHANGE COLUMN `cuarto_servicio` `cuartoServicio` CHAR(1) NOT NULL AFTER `comedorIndependiente`,
CHANGE COLUMN `deposito` `deposito` CHAR(1) NOT NULL AFTER `cuartoServicio`,
CHANGE COLUMN `estudio` `estudio` CHAR(1) NULL DEFAULT NULL AFTER `deposito`,
CHANGE COLUMN `jardines` `jardines` CHAR(1) NOT NULL AFTER `estudio`,
CHANGE COLUMN `parqueadero` `parqueadero` CHAR(1) NOT NULL AFTER `jardines`,
CHANGE COLUMN `precio_negociable` `precioNegociable` CHAR(1) NOT NULL AFTER `parqueadero`,
CHANGE COLUMN `transporte_publico_cercano` `transporteCercano` CHAR(1) NOT NULL AFTER `precioNegociable`,
CHANGE COLUMN `zona_infantil` `zonaInfantil` CHAR(1) NOT NULL AFTER `vistaExterior`,
CHANGE COLUMN `zonas_humedas` `zonasHumedas` CHAR(1) NOT NULL AFTER `zonaInfantil`,
CHANGE COLUMN `zona_ropas` `zonaRopas` CHAR(1) NOT NULL AFTER `zonasHumedas`,
CHANGE COLUMN `canchas_deportivas` `canchasDepor` CHAR(1) NOT NULL ,
CHANGE COLUMN `vista_exterior_interior` `vistaExterior` CHAR(1) NOT NULL ;
