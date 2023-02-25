# Rutas
(ver clients.js y fichero index.pug) dentro de la carpeta views,clients
- GET /clients -> Muestre todos los clientes
- GET /clients/new -> Muestra el formulario para nuevos clientes
- POST /clients/create -> Crea el nuevo cliente
- GET /clients/edit -> Formulario para editar clientes
- POST /clients/update -> Actualiza los clientes
- GET /clients/delete -> Borra los clientes

# RUTA
(ver clients.js y fichero form.pug)  dentro de la carpeta views,clients
GET /clients/new

- Renderiza la vista clients/form
- Muestra un formulario HTML con los campos de los clientes
- El formulario DEBE LANZAR UNA PETICIÓN POST CONTRA LA URL /clients/create


(ver clients.js y fichero view.pug)  dentro de la carpeta views,clients
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
  navegar hacia el detalle del cliente -> /clients/ ver index.pug de clients (a.btn.btn-primary(href="/clients/"+cliente.id) Detalle)
- Usar el layout dentro de la vista del detalle del cliente

# Edición

URL: GET /clients/edit/IDCLIENTE  (router.get('/edit/:clientId', async (req, res) => {})

- Recuperar el cliente a partir de su id   (const { clientId } = req.params;)
- Renderizar la vista clients/formUpdate   (res.render('clients/formUpdate', {cliente});)
- Pasamos el cliente recuperado a la vista
- Dentro de la vista debemos crear un formulario con todos los datos del cliente
- El formulario debe lanzar una petición POST sobre /clients/update
- De alguna manera, debemos hacer llegar el ID del cliente a través del body al
  manejador que actualiza el propio cliente

URL: GET /clients/delete/IDCLIENTE

- Borra el cliente a partir de su ID
- Redirecciona a la lista de clientes
- Botones dentro de la tabla que nos permitan editar y borrar clientes
