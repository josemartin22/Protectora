CREATE EXTENSION pgcrypto; 

CREATE TABLE Protectoras(
    id SERIAL PRIMARY KEY, 
    nombre TEXT, 
    email TEXT, 
    contrasenia TEXT, 
    direccion TEXT, 
    telefono INTEGER 
);

CREATE TABLE AnimalesAcogidos(
    id SERIAL PRIMARY KEY, 
    nombre TEXT, 
    sexo TEXT CHECK (sexo in ('MACHO', 'HEMBRA')),
    raza TEXT, 
    tamanio TEXT CHECK (tamanio in ('TOYS', 'PEQUEÑOS', 'MEDIANOS', 'GRANDES')), 
    edad INTEGER CHECK (Edad > 0), 
    protectora_id INTEGER REFERENCES Protectoras(id) NOT NULL
);

CREATE TABLE Clientes(
    dni TEXT PRIMARY KEY, 
    nombre TEXT, 
    email TEXT, 
    direccion TEXT, 
    contrasenia TEXT, 
    telefono INTEGER
);

CREATE TABLE Adopta(
    id SERIAL PRIMARY KEY, 
    dni TEXT REFERENCES Clientes(dni) NOT NULL, 
    definitiva BOOLEAN, 
    fecha DATE default now()
);
