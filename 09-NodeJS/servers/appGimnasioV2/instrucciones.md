# Rutas

- GET /clients -> Muestre todos los clientes
- GET /clients/new -> Muestra el formulario para nuevos clientes
- POST /clients/create -> Crea el nuevo cliente
- GET /clients/edit -> Formulario para editar clientes
- POST /clients/update -> Actualiza los clientes
- GET /clients/delete -> Borra los clientes

# RUTA

GET /clients/new

- Renderiza la vista clients/form
- Muestra un formulario HTML con los campos de los clientes
- El formulario DEBE LANZAR UNA PETICIÓN POST CONTRA LA URL /clients/create

GET /clients/IDCLIENTE ¡¡Hay que hacerla!!

- Recuperamos el cliente a través de su ID (req.params)
- Renderizamos la vista clients/view y le pasamos la información del cliente
  recuperado
- Dentro de la vista mostramos (como queráis) los datos del cliente

# Por hacer:

- Menú compartido entre todas las vistas que me permita navegar entre las
  diferentes páginas
  - Podemos usar la hoja de estilos para aplicar estilos propios
- Dentro de la tabla colocamos una nueva columna con un botón que nos permita
  navegar hacia el detalle del cliente -> /clients/3
- Usar el layout dentro de la vista del detalle del cliente

# Edición

URL: GET /clients/edit/IDCLIENTE

- Recuperar el cliente a partir de su id
- Renderizar la vista clients/formUpdate
- Pasamos el cliente recuperado a la vista
- Dentro de la vista debemos crear un formulario con todos los datos del cliente
- El formulario debe lanzar una petición POST sobre /clients/update
- De alguna manera, debemos hacer llegar el ID del cliente a través del body al
  manejador que actualiza el propio cliente

URL: GET /clients/delete/IDCLIENTE

- Borra el cliente a partir de su ID
- Redirecciona a la lista de clientes
- Botones dentro de la tabla que nos permitan editar y borrar clientes
