## RUTAS

- GET /contacto
- POST /users/new/create
- PUT /products/edit
- GET /clients/view

## App Gimnasio

- Crear la aplicación

express --view=pug --git appGimnasio (¡Seguir las instrucciones!)

- Revisa el package.json y generar el script de dev

### Rutas

- GET /clients - Vista de todos los clientes
- GET /clients/new - Vista con el formulario de inserción de cliente
- POST /clients/create - Recibe los datos del form anterior e inserta en base de
  datos
- GET /clients/edit/IDCLIENTE - Vista con el formulario de edición
- POST /clients/update - Recibe los datos del form anterior y edita el cliente
- GET /clients/delete/IDCLIENTE - Borra el cliente

- GET /api/clients
- POST /api/clients
- PUT /api/clients
- DELETE /api/clients
