const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const fs = require('fs');
const dayjs = require('dayjs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');//3ºTraigo el fichero a una variable para desp. utilizarla.
const clientsRouter = require('./routes/clients');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * MIDDLEWARES
 */
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

// Middleware que responda en función de un número aleatorio
/**
 * Dentro del middleware obtenemos un número aleatorio. Si el número es mayor de 0.6 respondemos (res.end) con un mensaje. Si es menor de 0.6, llamamos a next
 */
app.use((req, res, next) => {
  const num = Math.random(); // 0 - 1
  console.log('RANDOM', num);
  if (num > 0.6) {
    res.end('El número es mayor de 0.6');
  } else {
    next();
  }
});

// Middleware que registre en un fichero los datos de la petición
app.use((req, res, next) => {
  const line = `[${dayjs().format('DD-MM-YYYY HH:mm.ss')}] Método: ${req.method}. Url: ${req.url}\n`;
  fs.appendFile(`./logs/main${dayjs().format('YYYYMMDD')}.log`, line, () => {
    next();
  });
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);// 4º Lo uso aqui
app.use('/clients', clientsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
