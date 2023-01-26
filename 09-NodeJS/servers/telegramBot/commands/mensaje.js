const User = require('../models/user.model');

module.exports = async (ctx) => {
    const mensaje = ctx.message.text.split('/mensaje ')[1];

    const cont = await User.count();
    const randomNum = Math.floor(Math.random() * cont);
    const user = await User.findOne().skip(randomNum);

    ctx.telegram.sendMessage(user.telegram_id, mensaje);

    const { username, first_name } = ctx.from;
    ctx.reply(`${username ? '@' + username : first_name}, tu mensaje se ha enviado a un usuario aleatorio`);
};