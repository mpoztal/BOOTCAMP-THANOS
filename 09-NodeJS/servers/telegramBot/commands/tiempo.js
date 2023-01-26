const axios = require('axios').default;

module.exports = async (ctx) => {
    const ciudad = ctx.message.text.split('/tiempo ')[1];

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_TOKEN}&units=metric`;

    try {
        const { data } = await axios.get(url);

        const { temp, temp_min, temp_max, humidity } = data.main;
        const icon = data.weather[0].icon;

        const iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        await ctx.replyWithPhoto(iconurl);

        await ctx.reply(`⚡️ La temperatura en ${ciudad} es:

🌡 Actual: ${temp}ºC
🔥 Máxima: ${temp_max}ºC
❄️ Mínima: ${temp_min}ºC
💧 Humedad: ${humidity}%`);

    } catch (err) {
        console.log(err);
        ctx.reply('Comando mal ejecutado, \n\ndebería ser /tiempo NOMBRE_CIUDAD');
    }
}