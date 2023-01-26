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
    await page.goto('https://www.amazon.com');

    // Elimino las cookies
    try {
        await page.waitForSelector('input#sp-cc-accept', { timeout: 3000 });
        await page.click('input#sp-cc-accept');
    } catch (error) {
        console.log('No hay cajita de cookies');
    }

    // Escribo mi búsqueda en el campo de texto
    await page.waitForSelector('input#twotabsearchtextbox');
    await page.type('input#twotabsearchtextbox', 'libros de javascript');

    // Pulso el botón de envío
    // await page.click('input#nav-search-submit-button');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

    // Recupero los enlaces de los productos encontrados
    const arr = await page.evaluate(() => {
        const enlaces = document.querySelectorAll('.s-result-item h2 a');

        const arr = [];
        for (let enlace of enlaces) {
            arr.push(enlace.href);
        }
        return arr;
    });

    let cont = 0;
    for (let link of arr) {
        await page.goto(link);

        await page.waitForSelector('h1#title');

        const title = await page.evaluate(() => document.querySelector('h1#title').innerText);
        const image = await page.evaluate(() => document.querySelector('#imgBlkFront').src);

        const precio = await page.evaluate(() => {
            if (document.getElementById('price')) {
                return document.getElementById('price').innerText;
            } else if (document.getElementById('kindle-price')) {
                return document.getElementById('kindle-price').innerText;
            } else {
                return 0;
            }
        });
        console.log(precio);

        // Descarga de la imagen
        const res = await download.image({
            url: image,
            dest: `${__dirname}/images`
        })
        cont++;

        console.log(res);
    }

    // await page.waitForTimeout(5000);
    // await browser.close();
})();