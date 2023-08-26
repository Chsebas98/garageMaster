export interface RegisterClient {
    nombre:    string;
    apellido:  string;
    correo:    string;
    telefono:  string;
    direccion: string;
}

export interface ClientResponse {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    nombre:      string;
    apellido:    string;
    correo:      string;
    telefono:    string;
    direccion:   string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

