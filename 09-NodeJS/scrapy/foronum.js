const puppeteer = require('puppeteer');
const download = require('image-downloader');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: [`--window-size=1920,1080`],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });
    const page = await browser.newPage();
    await page.goto('https://www.foronum.com/catalogo-de-monedas-euros');

    await page.waitForSelector('.catalogo-lista');

    const res = await page.evaluate(() => {
        const paises = document.querySelectorAll('[atrr="catalogo-dir"]');

        const arr = [];
        for (let pais of paises) {
            const enlaces = pais.querySelectorAll('ul > li a');
            for (let enlace of enlaces) {
                arr.push(enlace.href);
            }
        }
        return arr;
    });

    await page.waitForTimeout(2000);

    for (let moneda of res) {
        await page.goto(moneda);
        await page.waitForTimeout(2000);

        try {
            const image = await page.evaluate(() => document.querySelector('.imgresponsive').src);

            // Descarga de la imagen
            const res = await download.image({
                url: image,
                dest: `${__dirname}/images`
            })
        } catch (err) {
            console.log('NO HAY IMAGEN');
        }
    }
})();