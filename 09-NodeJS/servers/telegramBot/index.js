const express = require('express');
const { Telegraf } = require('telegraf');

const User = require('./models/user.model');

// Carga del fichero de entorno
require('dotenv').config();

// Conexión BD MongoDB
require('./config/db');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Configuración BOT
app.use(bot.webhookCallback('/url_telegram'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/url_telegram`);

app.post('/url_telegram', (req, res) => {
    res.send('Termina la petición');
});

// Middleware BOT
bot.use(async (ctx, next) => {
    ctx.from.telegram_id = ctx.from.id;
    const user = await User.findOne({ telegram_id: ctx.from.telegram_id });
    if (!user)
        await User.create(ctx.from);
    next();
});

// COMANDOS
bot.command('test', require('./commands/test'));
bot.command('tiempo', require('./commands/tiempo'));
bot.command('donde', require('./commands/donde'));
bot.command('mensaje', require('./commands/mensaje'));

bot.on('text', require('./nlu'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor escuchando en puerto ' + PORT);
});