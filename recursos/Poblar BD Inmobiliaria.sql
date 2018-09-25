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
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('1', 'Quindio');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('2', 'Antioquia');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('3', 'Atlantico');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('4', 'Tolima');
INSERT INTO `inmobiliaria`.`departamentos` (`id`, `nombre`) VALUES ('5', 'Cundinamarca');

-- Ciudades --
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('1', 'Armenia', '1');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('2', 'Medellin', '2');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('3', 'Barranquilla', '3');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('4', 'Ibague', '4');
INSERT INTO `inmobiliaria`.`ciudades` (`id`, `nombre`, `departamento`) VALUES ('5', 'Bogota', '5');

-- Tipos de Inmueble --
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Casa', 'casa');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Apartamento', 'apartamento');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Finca', 'Finca');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('4', 'Oficina', 'Oficina');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('5', 'Local comercial', 'Local comercial');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('6', 'Bodega', 'Bodega');
INSERT INTO `inmobiliaria`.`tipo_inmueble` (`id`, `nombre`, `descripcion`) VALUES ('7', 'Chalet', 'Chalet');


