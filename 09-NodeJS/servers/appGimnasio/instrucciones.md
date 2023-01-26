# Recuperar todos los profesores

- Crear la ruta

GET /api/teachers

- Comprobar si la ruta funciona! (res.end)

- Crear el modelo para teacher
- Crear la función getAll
- Ejecutar la función dentro del manejador

# Edad

GET /api/clients/older/45

GET /api/clients/between/25/and/78

GET /api/teachers/names

- Recupere un array con los nombres de todos los profesores

['nombre1', 'nombre2', 'nombre3'...]

select nombre from profesores

- GET /api/teachers/IDTEACHER Recupera el profesor a través de su ID
  - Solo necesito un único profesor
  - El id del profesor lo recupero de la URL

- POST /api/teachers/ Crea un profesor a partir de los datos recibidos en el
  body Devuelve el nuevo profesor

- GET /api/teachers/clients Recupera todos los profesores con sus clientes
  asociados

select * from clientes where profesor_id = XXX

```json
{
    "nombre": "Federico",
    "experiencia": 23,
    "hora_entrada": "10:00",
    "hora_salida": "12:00",
    "clientes": [{}, {}, {} ...]
}
```

### DELETE

DELETE /api/clients/CLIENTID

- Mirar cuál es el id del cliente - req.params
- Lanzar query sobre BD con ese id - delete from clientes where id = ?

### Clientes por página

GET /api/clients?page=3&limit=10

## Datos a incluir

- Número total de clientes
- Número total de páginas
- Página siguiente
- Página anterior

{ "info": { "total": 105, "pages": 11, "next": URLSIG, "prev": URLPREV },
"result": [ARRAY DE CLIENTES] }

## URLS Clientes

GET /

- Recupera todos los clientes paginados

GET /older/AGE

- Recupera los clientes mayores de una edad

GET /between/MIN/and/MAX

- Recupera los clientes en un margen de edad

POST /

- Crea un nuevo cliente

PUT /CLIENTID

- Actualiza un cliente

DELETE /CLIENTID

- Borra un cliente
