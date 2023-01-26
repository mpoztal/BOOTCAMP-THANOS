const { Wit, log } = require('node-wit');
const fs = require('fs-extra');
const googleTTS = require('google-tts-api');

const client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG)
});

module.exports = async (ctx) => {
    const res = await client.message(ctx.message.text);
    if (res.intents.length === 0 || res.intents[0].confidence < 0.8) {
        ctx.reply('No te entiendo');
    } else {
        const intent = res.intents[0].name;
        const content = await fs.readFile(`./frases/${intent}.txt`, 'utf-8');
        const arrFrases = content.split('\n');
        const randomNum = Math.floor(Math.random() * arrFrases.length)

        const audioUrl = googleTTS.getAudioUrl(`${ctx.from.first_name}, ` + arrFrases[randomNum], {
            lang: 'es',
            slow: false
        });

        // ctx.reply(arrFrases[randomNum]);
        ctx.replyWithAudio(audioUrl);
    }
}