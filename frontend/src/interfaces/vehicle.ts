import { User } from "./authResponse";
import { ClientResponse } from "./client";

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
    clientes:       ClientResponse;
}

//
export interface RegisterVehicleReview {
    detalles_revision:       string;
    fecha_salida:            Date;
    tiempo_reparacion:       string;
    peizas_cambiadas:        string;
    extras:                  string;
    detalles_extra:          string;
    precio:                  number;
    vehiculos:               number[];
    users_permissions_users: number[];
}

export interface ListVehicleReview {
    data: ListVehicleReviewDatum[];
}

export interface ListVehicleReviewDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    detalles_revision:       string;
    fecha_salida:            Date;
    tiempo_reparacion:       string;
    peizas_cambiadas:        string;
    extras:                  string;
    detalles_extra:          string;
    precio:                  number;
    createdAt:               Date;
    updatedAt:               Date;
    publishedAt:             Date;
    vehiculos:               Vehiculos;
    users_permissions_users: UsersPermissionsUsers;
}

export interface UsersPermissionsUsers {
    data: UsersPermissionsUsersDatum[];
}

export interface UsersPermissionsUsersDatum {
    id:         number;
    attributes: UserAttributes;
}

export interface UserAttributes {
    username:  string;
    email:     string;
    provider:  string;
    confirmed: boolean;
    blocked:   boolean;
    createdAt: Date;
    updatedAt: Date;
    nivel:     string;
}

export interface Vehiculos {
    data: VehiculosDatum[];
}

export interface VehiculosDatum {
    id:         number;
    attributes: VehicleAttributes;
}

export interface VehicleAttributes {
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
