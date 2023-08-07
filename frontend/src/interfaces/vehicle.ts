export interface VehicleResponse {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    placa:          string;
    color:          string;
    kilometraje:    number;
    anio:           number;
    marca:          string;
    modelo:         string;
    combustible:    string;
    fecha_ingreso:  Date;
    hora_ingreso:   string;
    motivo_ingreso: string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
}

export interface RegisterVehicle {
    placa:          string;
    color:          string;
    kilometraje:    number;
    anio:           number;
    marca:          string;
    modelo:         string;
    combustible:    string;
    fecha_ingreso:  Date;
    hora_ingreso:   string;
    motivo_ingreso: string;
    clientes:       number[];
}

// 
export interface VehicleWithClients {
    data: VehicleWithClientsDatum[];
}

export interface VehicleWithClientsDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    placa:          string;
    color:          string;
    kilometraje:    number;
    anio:           number;
    marca:          string;
    modelo:         string;
    combustible:    string;
    fecha_ingreso:  Date;
    hora_ingreso:   string;
    motivo_ingreso: string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
    clientes:       Clientes;
}

export interface Clientes {
    data: ClientesDatum[];
}

export interface ClientesDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    nombre:      string;
    apellido:    string;
    correo:      string;
    telefono:    string;
    direccion:   string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}