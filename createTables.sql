CREATE EXTENSION pgcrypto; 

CREATE TABLE protectoras(
    id SERIAL PRIMARY KEY, 
    nombre TEXT, 
    email TEXT , 
    contrasenia TEXT, 
    direccion TEXT, 
    telefono INTEGER 
);

CREATE TABLE animales_acogidos(
    id SERIAL PRIMARY KEY, 
    nombre TEXT, 
    modificado BOOLEAN default false,
    tipo TEXT CHECK (tipo in ('GATO', 'PERRO')),
    sexo TEXT CHECK (sexo in ('MACHO', 'HEMBRA')),
    raza TEXT, 
    tamanio TEXT CHECK (tamanio in ('TOYS', 'PEQUEÑOS', 'MEDIANOS', 'GRANDES')), 
    edad INTEGER CHECK (Edad > 0), 
    protectora_id INTEGER REFERENCES Protectoras(id) NOT NULL,
    foto TEXT
);

CREATE TABLE clientes(
    dni TEXT PRIMARY KEY, 
    nombre TEXT NOT NULL, 
    email TEXT NOT NULL , 
    direccion TEXT NOT NULL, 
    contrasenia TEXT NOT NULL, 
    telefono INTEGER NOT NULL
);

CREATE TABLE adopta(
    dni TEXT REFERENCES Clientes(dni) NOT NULL, 
    definitiva BOOLEAN, 
    id_animal INTEGER REFERENCES animales_acogidos(id) PRIMARY KEY,
    fecha DATE default now()
);
