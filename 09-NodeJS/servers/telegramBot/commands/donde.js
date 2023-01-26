const NodeGeocoder = require('node-geocoder');

module.exports = async (ctx) => {
    const direccion = ctx.message.text.split('/donde ')[1];

    const options = {
        provider: 'google',
        apiKey: process.env.GOOGLE_API_KEY
    };

    const geocoder = NodeGeocoder(options);

    // Using callback
    const res = await geocoder.geocode(direccion);

    const { latitude, longitude } = res[0];

    ctx.reply(`Las coordenadas son:
LAT: ${latitude}
LNG: ${longitude}`);
    ctx.replyWithLocation(latitude, longitude);

}