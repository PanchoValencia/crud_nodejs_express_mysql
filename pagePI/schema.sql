DROP DATABASE IF EXISTS foro;
CREATE DATABASE IF NOT EXISTS foro;
USE foro;

CREATE TABLE persona
(
    cod_persona INT PRIMARY KEY AUTO_INCREMENT,
    nombre_persona VARCHAR(30) NOT NULL,
    contraseña VARCHAR(15) NOT NULL
);

CREATE TABLE comentarios
(
    cod_comentarios INT PRIMARY KEY AUTO_INCREMENT,
    comentario VARCHAR(500) NOT NULL,
    fecha datetime NOT NULL
);

CREATE TABLE comment_user
(
    cod_relation INT PRIMARY KEY AUTO_INCREMENT,
    cod_persona INT,
    cod_comentarios INT
);
