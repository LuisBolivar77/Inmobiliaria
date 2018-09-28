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

-- Tipos de Inmueble --
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Casa', 'casa');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Apartamento', 'apartamento');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Finca', 'Finca');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Oficina', 'Oficina');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('5', 'Local comercial', 'Local comercial');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('6', 'Bodega', 'Bodega');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('7', 'Chalet', 'Chalet');

-- Inmueble -- 
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('1', 'Carrera 19', '1200', '230000000', '3', '1', '1', '2', '15', 'Casa una chimba', '2003', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20114564', '2018-02-02', '1', '1', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('2', 'Carrera 21', '600', '100000000', '4', '1', '0', '3', '10', 'Casa una chimba', '2013', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20124565', '2018-02-02', '2', '1', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('3', 'Carrera 22', '700', '63000000', '5', '1', '0', '4', '5', 'Casa una chimba', '2001', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20134566', '2018-02-02', '3', '2', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('4', 'Calle 3', '900', '13000000', '7', '1', '1', '5', '9', 'Casa una chimba', '1987', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20144567', '2018-02-02', '4', '3', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('5', 'Avenida san juan #2121', '90', '33000000', '1', '1', '1', '2', '5', 'Casa una chimba', '1995', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20104564', '2018-02-02', '5', '4', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('6', 'Carrera 11', '1400', '45000000', '2', '1', '1', '2', '25', 'Casa una chimba', '2013', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20154568', '2018-02-02', '6', '5', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('7', 'Carrera 32', '1600', '78000000', '4', '1', '0', '2', '5', 'Casa una chimba', '2000', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20164569', '2018-02-02', '7', '5', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('8', 'Carrera 45', '200', '15000000', '6', '1', '0', '3', '35', 'Casa una chimba', '2005', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20174510', '2018-02-02', '1', '4', '2', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `area`, `valor`, `banios`, `estado`, `tipoAV`, `garajes`, `habitaciones`, `detalles`, `anoconstruccion`, `ascensor`, `canchas_deportivas`, `zonas_humedas`, `zona_infantil`, `jardines`, `transporte_publico_cercano`, `precio_negociable`, `zona_ropas`, `parqueadero`, `deposito`, `estudio`, `tipo_cortinas`, `cuarto_servicio`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `vista_exterior_interior`, `zona`, `numero_matricula`, `aprobacion_fecha`, `tipo`, `ciudad`, `usuario`, `administrador`) VALUES ('9', 'Calle 21 #2323', '80', '22500000', '3', '1', '1', '3', '55', 'Casa una chimba', '2010', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', 'una chimba', '1', '1', '1', '1', '1', '0', '20184511', '2018-02-02', '7', '1', '2', '1');

-- Archivo inmueble --
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_1.jpg', '1');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_2.jpg', '2');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_3.jpg', '3');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_4.jpg', '4');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_5.jpg', '5');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_6.jpg', '6');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_7.jpg', '7');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_8.jpg', '8');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`tipo`, `nombre`, `inmueble`) VALUES ('0', 'property_9.jpg', '9');
