Empleado (nombre, apellidos, email, direccion, departamento)

- Departamento es un objeto que hace referencia al modelo Departamento

Departamento (nombre, descripcion, manager)

- Manager es un objeto que hace referencia al modelo Empleado

Oficina (nombre, direccion, departamentos, director)

- Departamentos es un array de objetos que hacen referencia al modelo
  Departamento
- Director es un objeto que hace referencia al modelo Empleado

### RUTAS:

POST /api/empleados -> recibe los datos del empleado y lo crea en la BD GET
/api/empleados/IDEMPLEADO -> Recupera el empleado y los datos de su departamento

POST /api/departamentos -> recibe los datos del departamento y lo genera en la
BD GET /api/departamentos/IDDEPARTAMENTO -> recupera los datos del departamento
y todos sus empleados asociados

GET /api/oficinas -> Recupera todas las oficinas con sus departamentos y los
empleados de cada uno de ellos
