CREATE TABLE Protectoras(
    ID_Protectora INTEGER PRIMARY KEY, 
    Nombre VARCHAR(20), 
    Email VARCHAR(30), 
    Contraseña VARCHAR(20), 
    Direccion VARCHAR(50), 
    Telefono INTEGER 
);

CREATE TABLE AnimalesAcogidos(
    ID_Animal INTEGER PRIMARY KEY, 
    Nombre VARCHAR(20), 
    Sexo VARCHAR(6) CHECK Sexo in ('Macho', 'Hembra', 'Otro'),
    Raza VARCHAR(15), 
    Tamaño VARCHAR(8) CHECK Tamaño in ('TOYS', 'PEQUEÑOS', 'MEDIANOS', 'GRANDES'), 
    Edad INTEGER CHECK (Edad > 0), 
    ID_Protectora REFERENCES Protectoras(ID_Protectora) NOT NULL
);

CREATE TABLE Clientes(
    DNI VARCHAR(9) PRIMARY KEY, 
    Nombre VARCHAR(40), 
    Email VARCHAR(30), 
    Direccion VARCHAR(50), 
    Contraseña VARCHAR (20), 
    Telefono INTEGER
);

CREATE TABLE Adopta(
    ID_Animal INTEGER PRIMARY KEY, 
    DNI REFERENCES Clientes(DNI) NOT NULL, 
    Definitiva BOOLEAN, 
    Fecha DATE
);
