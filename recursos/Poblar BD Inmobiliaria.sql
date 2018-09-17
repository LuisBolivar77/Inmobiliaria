-- ROLES -- 
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('1', 'Administrador', 'administrador');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('2', 'Cliente', 'cliente');
INSERT INTO `inmobiliaria`.`roles` (`id`, `nombre`, `descripcion`) VALUES ('3', 'Empleado', 'empleado');

-- PERSONAS --
INSERT INTO `inmobiliaria`.`personas` (`cedula`, `nombre`, `apellido`, `telefono`, `direccion`, `rol`) VALUES ('1094', 'Carlos', 'Martinez', '3138920011', 'carrera 14 #4567', '1');

-- USUARIOS --
INSERT INTO `inmobiliaria`.`usuarios` (`persona`, `username`, `password`) VALUES ('1', 'admin', '123');

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
