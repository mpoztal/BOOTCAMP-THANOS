# Pasos para la creación de un proyecto con Express

1 - Crear el proyecto con express-generator

```javascript
// Proyecto con vistas PUG
express --view=pug --git appOficina

// Proyecto sin vistas
express --no-view --git appOficina
```

2 - Entramos en el directorio e instalamos las dependencias

```
cd appOficina && npm install
```

3 - Instalar las dependencias específicas del proyecto (**Solo las necesarias**)

```
npm install mongoose dotenv dayjs jsonwebtoken bcryptjs cors mysql2
```

4 - Crear el fichero de entorno en la raíz de la aplicación con sus variables
correspondientes (.env)

```
MONGO_URL="mongodb://127.0.0.1/oficina"
```

5 - Cargamos los datos del fichero de entorno en nuestra aplicación a través de
la librería [dotenv](https://www.npmjs.com/package/dotenv).

**bin/www**

```javascript
require("dotenv").config();
```

- Este require carga todas las variables del fichero .env y las coloca dentro de
  la propiedad propiedad **process.env**

6 - Conexión con la **base de datos**

**config/db.js (para MongoDB)**

```javascript
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);
```

**config/db.js (para MySQL)**

```javascript
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

global.db = pool;
```

- Lanzamos la conexión desde el fichero principal de nuestra aplicación
  (**bin/www**), justo por debajo de la extracción de las variables de entorno.

```javascript
require("../config/db.js");
```

7 - Configuramos la librería **cors** para poder realizar peticiones desde el
front.

- Dentro de **app.js** requerimos cors y lo configuramos

```javascript
const cors = require('cors');

...

app.use(cors());
```

8 - Creamos nuestros scripts de arranque en **package.json**

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
}
```

9 - (**OPCIONAL**) Si necesitamos crear pruebas sobre nuestra aplicación:

- Instalar las dependencias

```
npm install jest @types/jest supertest
```

- Dentro del fichero package.json incorporamos el script para lanzar las
  pruebas:

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "test": "jest"
}
```
