-- ROLES -- 
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Administrador', 'administrador');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Cliente', 'cliente');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Empleado', 'empleado');

-- PERSONAS --
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('1', '1094', 'Carlos', 'Martinez', '1989-02-02', '3138920011', 'carrera 14 #4567', '1');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('2', '1090', 'Camila', 'Torres', '1989-02-02', '3214567890', 'calle 2 Norte', '3');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('3', '1091', 'pedro', 'perez', '1989-02-03', '3214567', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('4', '1092', 'camilo', 'zapata', '1989-04-03', '3314567', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('5', '1093', 'laura', 'posada', '1989-07-03', '3214133345', 'calle 2 Norte', '2');
INSERT INTO `inmobiliaria`.`personas` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `telefono`, `direccion`, `rol`) VALUES ('6', '1089', 'daniela', 'rojas', '1989-09-03', '32145637', 'calle 2 Norte', '2');

-- USUARIOS --
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('1', 'admin', '123');
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('2', 'camila', 'torres123');
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('5', 'lau', '123');

-- Accesos --
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('1', 'Gestionar Personas', 'administracion/gestionar-personas');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('2', 'Gestionar Empleados', 'administracion/gestionar-empleados');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('3', 'Gestionar Clientes', 'administracion/gestionar-clientes');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('4', 'Gestionar Administradores', 'administracion/gestionar-administradores');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('5', 'Gestion Inmuebles', 'administracion/gestion-inmuebles');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('6', 'Aprobar Inmuebles', 'administracion/aprobar-inmueble');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('7','Gestion Inmueble-Cliente', 'cliente/gestion-inmuebles');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('9','Gestion Ventas-Arriendos', 'administracion/gestion-ventas-arriendos');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('10','Gestion Promociones', 'administrador/gestionar-promociones');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('11','Listado de Visitas', 'cliente/visitas-cliente');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('12','Asignar Visitas', 'administracion/asignar-visitas');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('13','Visitas Asignadas', 'empleado/visitas-empleado');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('14', 'Finalizacion Arriendo', 'administracion/asignar-arriendo-contrato');
INSERT INTO `inmobiliaria`.`accesos` (`id`, `nombre`, `url`) VALUES ('15', 'Exportar Reportes', 'administracion/generar-reportes');

-- Rol_Accesos --
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '1');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '2');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '3');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '4');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '5');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('3', '3');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '6');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '7');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('2', '7');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '9');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '10');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '11');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('2', '11');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '12');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('3', '13');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '14');
INSERT INTO `inmobiliaria`.`rol_accesos` (`rol`, `acceso`) VALUES ('1', '15');



-- Cargos --
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Contador', 'es el que cuenta');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Administrador Ventas', 'es el que administra las ventas');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Secretario', 'es el que secretarea');
INSERT INTO `inmobiliaria`.`cargos` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Auxiliar de Visitas', 'es el que realiza las visitas');

-- Empleados --
INSERT INTO `inmobiliaria`.`empleados` (`usuario`, `salario`, `cargo`) VALUES ('2', '1200000', '2');

-- Departamentos --

INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('1', 'Quindio');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('2', 'Risaralda');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('3', 'Cundinamarca');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('4', 'Antioquia');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('5', 'Nariño');

-- Ciudadades --

INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('1', 'Calarca', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('2', 'Circacia', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('3', 'Filandia', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('4', 'Pereira', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('5', 'Manizales', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('6', 'Dos Quebradas', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('7', 'Sanra rosa del cabal', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('8', 'Bogota', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('9', 'Fusagasuga', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('10', 'Cajica', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('11', 'Cota', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('12', 'Medellin', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('13', 'Zaragoza', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('14', 'La ceja', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('15', 'Puerto berrio', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('16', 'Pasto', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('17', 'Tumaco', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('18', 'La union', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('19', 'El peñol', '5');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('20', 'Nariño', '5');

-- Tipos de Inmueble --
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Casa', 'casa');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Apartamento', 'apartamento');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Finca', 'Finca');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Oficina', 'Oficina');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('5', 'Local comercial', 'Local comercial');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('6', 'Bodega', 'Bodega');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('7', 'Chalet', 'Chalet');

-- Inmueble -- 
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('1', 'carrera 1', '123321', 'bella casa', '1983-09-28', 'melas', '12', '400000', '4', '12', '2', '2', '2018-09-28', '3', '1', '1', '1', '1', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('2', 'carrera 20', '321123', 'casa grande', '1983-09-28', 'de tela', '234', '500000', '2', '2', '2', '1', '2018-09-28', '3', '1', '0', '1', '5', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('3', 'carrera 30', '321231', 'casa pequeña', '1983-09-28', 'percianas', '23', '600000', '1', '3', '2', '2', '2018-09-28', '4', '1', '0', '1', '2', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('4', 'carrerra 40', '3213421', 'casa verde', '1983-09-28', 'percianas', '543', '2000000', '3', '4', '0', '1', '2018-09-28', '5', '1', '0', '1', '2', '1', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('5', 'carrera 50', '432123', 'casa roja', '1983-09-28', 'percianas', '123', '4000000', '4', '5', '2', '2', '2018-09-28', '6', '1', '1', '1', '4', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('6', 'carrerra 100', '2312451', 'casa moraada', '1983-09-28', 'percianas', '5645', '3000000', '5', '6', '1', '1', '2018-09-28', '7', '1', '0', '0', '3', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '1', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('7', 'carrera 24', '345211', 'casa azul', '1983-09-28', 'percianas', '234', '2000000', '2', '7', '0', '2', '2018-09-28', '8', '1', '1', '0', '5', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('8', 'carrera 34', '63123', 'casa gris', '1983-09-28', 'percianas', '423', '8000000', '3', '8', '3', '2', '2018-09-28', '2', '0', '0', '0', '4', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('9', 'carrera 43', '723131', 'casa sin techo', '1983-09-28', 'percianas', '564', '7000000', '1', '2', '0', '1', '2018-09-28', '7', '1', '1', '1', '2', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO `inmobiliaria`.`inmueble` (`id`, `direccion`, `numero_matricula`, `detalles`, `añoconstruccion`, `tipo_cortinas`, `area`, `valor`, `banios`, `habitaciones`, `garajes`, `usuario`, `aprobacion_fecha`, `ciudad`, `tipoAV`, `zona`, `estado`, `tipo`, `ascensor`, `canchas_deportivas`, `chimenea`, `cocinaAC`, `comedorIndependiente`, `cuarto_servicio`, `deposito`, `estudio`, `jardines`, `parqueadero`, `precio_negociable`, `transporte_publico_cercano`, `vista_exterior_interior`, `zona_infantil`, `zonas_humedas`, `zona_ropas`) VALUES ('10', 'carrera 27', '8123425', 'casa amarilla', '1983-09-28', 'percianas', '123', '9000000', '5', '2', '0', '2', '2018-09-28', '5', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '1', '1', '1', '1');

-- Archivo inmueble --
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('1','1', 'property_1.jpg', '1');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('2','2', 'property_2.jpg', '2');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('3','3', 'property_3.jpg', '3');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('4','4', 'property_4.jpg', '4');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('5','5', 'property_5.jpg', '5');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('6','6', 'property_6.jpg', '6');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('7','7', 'property_7.jpg', '7');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('8','1', 'property_8.jpg', '8');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('9','2', 'property_9.jpg', '9');
INSERT INTO `inmobiliaria`.`archivo_inmueble` (`id`,`tipo`, `nombre`, `inmueble`) VALUES ('10','3', 'property_9.jpg', '10');
