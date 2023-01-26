const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

require('../models/departamento.model');
require('../models/oficina.model');
require('../models/empleado.model');