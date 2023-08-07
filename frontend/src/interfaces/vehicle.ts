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

