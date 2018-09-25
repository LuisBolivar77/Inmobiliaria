-- Generado por Oracle SQL Developer Data Modeler 4.2.0.921
--   en:        2018-09-22 09:10:15 COT
--   sitio:      Oracle Database 11g
--   tipo:      Oracle Database 11g



CREATE TABLE accesos (
    id       INTEGER NOT NULL AUTO_INCREMENT,
    nombre   VARCHAR(60) NOT NULL,
    url      VARCHAR(200) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE archivo_inmueble (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    tipo       INTEGER NOT NULL,
    nombre     VARCHAR(300) NOT NULL,
    inmueble   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE arriendo (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    contrato   INTEGER NOT NULL,
    empleado   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE cargos (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    nombre        VARCHAR(100) NOT NULL,
    descripcion   VARCHAR(300) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE caucion (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    descripcion   VARCHAR(1000) NOT NULL,
    arriendo      INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE cita_desalojo (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    fecha      DATE NOT NULL,
    arriendo   INTEGER NOT NULL,
    empleado   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE ciudades (
    id             INTEGER NOT NULL AUTO_INCREMENT,
    nombre         VARCHAR(100) NOT NULL,
    departamento   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE contrato (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    descripcion   VARCHAR(1000),
    empleado      INTEGER NOT NULL,
    cliente       INTEGER NOT NULL,
    visita        INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE departamentos (
    id       INTEGER NOT NULL AUTO_INCREMENT,
    nombre   VARCHAR(100) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE empleados (
    usuario   INTEGER NOT NULL,
    salario   INTEGER NOT NULL,
    cargo     INTEGER NOT NULL,
    PRIMARY KEY ( usuario )
);

CREATE TABLE experiencias (
    id                   INTEGER NOT NULL AUTO_INCREMENT,
    empresa              VARCHAR(200) NOT NULL,
    empresa_direccion    VARCHAR(100) NOT NULL,
    empresa_telefono     VARCHAR(100) NOT NULL,
    cargo                VARCHAR(100) NOT NULL,
    fecha_inicio         DATE NOT NULL,
    fecha_fin            DATE NOT NULL,
    file_certificacion   VARCHAR(200) NOT NULL,
    empleado             INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE formaciones (
    id                   INTEGER NOT NULL AUTO_INCREMENT,
    institucion          VARCHAR(100) NOT NULL,
    titulo               VARCHAR(100) NOT NULL,
    file_certificacion   VARCHAR(300) NOT NULL,
    empleado             INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE formato_ventas (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    fecha      DATE NOT NULL,
    inmueble   INTEGER NOT NULL,
    empleado   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE informe (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    fecha         DATE NOT NULL,
    descripcion   VARCHAR(1000) NOT NULL,
    arriendo_id   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE inmueble (
    id                           INTEGER NOT NULL AUTO_INCREMENT,
    numero_matricula             VARCHAR(100) NOT NULL,
    direccion                    VARCHAR(100) NOT NULL,
    area                         INTEGER NOT NULL,
    valor                        INTEGER NOT NULL,
    banios                       INTEGER NOT NULL,
    estado                       INTEGER NOT NULL,
    tipoventaarrendo             INTEGER NOT NULL,
    garajes                      INTEGER NOT NULL,
    antiguedad                   INTEGER NOT NULL,
    detalles                     VARCHAR(400) NOT NULL,
    añoconstruccion              VARCHAR(20) NOT NULL,
    ascensor                     CHAR(1) NOT NULL,
    canchas_deportivas           CHAR(1) NOT NULL,
    zonas_humedas                CHAR(1) NOT NULL,
    zona_infantil                CHAR(1) NOT NULL,
    jardines                     CHAR(1) NOT NULL,
    transporte_publico_cercano   CHAR(1) NOT NULL,
    precio_negociable            CHAR(1) NOT NULL,
    zona_ropas                   CHAR(1) NOT NULL,
    parqueadero                  CHAR(1) NOT NULL,
    deposito                     CHAR(1) NOT NULL,
    estudio                      CHAR(1),
    tipo_cortinas                VARCHAR(100) NOT NULL,
    cuarto_servicio              CHAR(1) NOT NULL,
    chimenea                     CHAR(1) NOT NULL,
    cocinaabiertacerrada         CHAR(1) NOT NULL,
    comedorIndependiente         CHAR(1) NOT NULL,
    vista_exterior_interior      CHAR(1) NOT NULL,
    zona                         INTEGER NOT NULL,
    aprobacion_fecha             DATE,
    tipo                         INTEGER NOT NULL,
    ciudad                       INTEGER NOT NULL,
    usuario                      INTEGER NOT NULL,
    administrador                INTEGER,
    promocion                    INTEGER,
    PRIMARY KEY ( id )
);

CREATE TABLE personas (
    id                 INTEGER NOT NULL AUTO_INCREMENT,
    cedula             VARCHAR(20) NOT NULL,
    nombre             VARCHAR(40) NOT NULL,
    apellido           VARCHAR(40) NOT NULL,
    fecha_nacimiento   DATE NOT NULL,
    telefono           VARCHAR(10) NOT NULL,
    direccion          VARCHAR(50) NOT NULL,
    rol                INTEGER NOT NULL,
    PRIMARY KEY ( id )
);
ALTER TABLE personas ADD CONSTRAINT personas__un UNIQUE ( cedula );

CREATE TABLE promocion (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    descripcion   VARCHAR(100) NOT NULL,
    porcentaje    INTEGER NOT NULL,
    fecha         DATE NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE reportes_visitas (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    fecha      DATE NOT NULL,
    inmueble   INTEGER NOT NULL,
    usuario    INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE reservar_visita (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    mensaje    VARCHAR(600) NOT NULL,
    fecha      DATE,
    estado     INTEGER NOT NULL,
    inmueble   INTEGER NOT NULL,
    cliente    INTEGER NOT NULL,
    empleado   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE reunion (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    fecha         DATE NOT NULL,
    descripcion   VARCHAR(1000) NOT NULL,
    persona       INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE rol_accesos (
    rol      INTEGER NOT NULL,
    acceso   INTEGER NOT NULL
);

ALTER TABLE rol_accesos ADD CONSTRAINT rol_accesos_pk PRIMARY KEY ( rol,acceso );

CREATE TABLE roles (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    nombre        VARCHAR(30) NOT NULL,
    descripcion   VARCHAR(200) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE tipo_inmueble (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    nombre        VARCHAR(50) NOT NULL,
    descripcion   VARCHAR(300) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE usuarios (
    persona    INTEGER NOT NULL,
    username   VARCHAR(100) NOT NULL,
    password   VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios ADD CONSTRAINT usuario_pk PRIMARY KEY ( persona );

ALTER TABLE usuarios ADD CONSTRAINT usuario__un UNIQUE ( persona );

CREATE TABLE venta (
    id         INTEGER NOT NULL AUTO_INCREMENT,
    contrato   INTEGER NOT NULL,
    empleado   INTEGER NOT NULL,
    PRIMARY KEY ( id )
);

ALTER TABLE rol_accesos ADD CONSTRAINT acceso FOREIGN KEY ( acceso )
    REFERENCES accesos ( id );

ALTER TABLE caucion ADD CONSTRAINT arriendo FOREIGN KEY ( arriendo )
    REFERENCES arriendo ( id );

ALTER TABLE arriendo ADD CONSTRAINT arriendo_contrato_fk FOREIGN KEY ( contrato )
    REFERENCES contrato ( id );

ALTER TABLE informe ADD CONSTRAINT arriendov2 FOREIGN KEY ( arriendo_id )
    REFERENCES arriendo ( id );

ALTER TABLE cita_desalojo ADD CONSTRAINT cita_desalojo_arriendo_fk FOREIGN KEY ( arriendo )
    REFERENCES arriendo ( id );

ALTER TABLE ciudades ADD CONSTRAINT ciudades_departamentos_fk FOREIGN KEY ( departamento )
    REFERENCES departamentos ( id );

ALTER TABLE venta ADD CONSTRAINT contraro FOREIGN KEY ( contrato )
    REFERENCES contrato ( id );

ALTER TABLE reservar_visita ADD CONSTRAINT empleado FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE empleados ADD CONSTRAINT empleados_cargos_fk FOREIGN KEY ( cargo )
    REFERENCES cargos ( id );

ALTER TABLE empleados ADD CONSTRAINT empleados_usuarios_fk FOREIGN KEY ( usuario )
    REFERENCES usuarios ( persona );

ALTER TABLE venta ADD CONSTRAINT empleadov2 FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE arriendo ADD CONSTRAINT empleadov3 FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE cita_desalojo ADD CONSTRAINT empleadov5 FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE formato_ventas ADD CONSTRAINT empleadov6 FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE experiencias ADD CONSTRAINT experiencias_empleados_fk FOREIGN KEY ( empleado )
    REFERENCES empleados ( usuario );

ALTER TABLE formaciones ADD CONSTRAINT formaciones_empleados_fk FOREIGN KEY ( empleado )
    REFERENCES empleados ( usuario );

ALTER TABLE archivo_inmueble ADD CONSTRAINT fotos_inmueble_inmueble_fk FOREIGN KEY ( inmueble )
    REFERENCES inmueble ( id );

ALTER TABLE formato_ventas ADD CONSTRAINT inmueble FOREIGN KEY ( inmueble )
    REFERENCES inmueble ( id );

ALTER TABLE inmueble ADD CONSTRAINT inmueble_ciudades_fk FOREIGN KEY ( ciudad )
    REFERENCES ciudades ( id );

ALTER TABLE inmueble ADD CONSTRAINT inmueble_promocion_fk FOREIGN KEY ( promocion )
    REFERENCES promocion ( id );

ALTER TABLE inmueble ADD CONSTRAINT inmueble_usuarios_fk FOREIGN KEY ( usuario )
    REFERENCES usuarios ( persona );

ALTER TABLE inmueble ADD CONSTRAINT inmueble_usuarios_fkv2 FOREIGN KEY ( administrador )
    REFERENCES usuarios ( persona );

ALTER TABLE reunion ADD CONSTRAINT persona FOREIGN KEY ( persona )
    REFERENCES personas ( id );

ALTER TABLE personas ADD CONSTRAINT personas_roles_fk FOREIGN KEY ( rol )
    REFERENCES roles ( id );

ALTER TABLE contrato ADD CONSTRAINT personav1 FOREIGN KEY ( empleado )
    REFERENCES personas ( id );

ALTER TABLE contrato ADD CONSTRAINT personav3 FOREIGN KEY ( cliente )
    REFERENCES personas ( id );

ALTER TABLE reservar_visita ADD CONSTRAINT res_visita_inm_fk FOREIGN KEY ( inmueble )
    REFERENCES inmueble ( id );

ALTER TABLE contrato ADD CONSTRAINT reservar_visita FOREIGN KEY ( visita )
    REFERENCES reservar_visita ( id );

ALTER TABLE rol_accesos ADD CONSTRAINT rol FOREIGN KEY ( rol )
    REFERENCES roles ( id );

ALTER TABLE inmueble ADD CONSTRAINT tipo_inmueble_fk FOREIGN KEY ( tipo )
    REFERENCES tipo_inmueble ( id );

ALTER TABLE usuarios ADD CONSTRAINT usuario_personas_fk FOREIGN KEY ( persona )
    REFERENCES personas ( id );

ALTER TABLE reservar_visita ADD CONSTRAINT visita_personas_fk FOREIGN KEY ( cliente )
    REFERENCES personas ( id );



-- Informe de Resumen de Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                            25
-- CREATE INDEX                             0
-- ALTER TABLE                             59
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0