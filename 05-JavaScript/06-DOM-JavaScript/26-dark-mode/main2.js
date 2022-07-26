/** EJERCICIO
 * foto Darth Vader: https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80
 * 
 *  Cuando hagamos click en el botón "Dark Mode":
 *    que el color de fondo de la web pase a ser el "main-color"
 *    que los textos pasen a ser blancos
 * 
 *    que el título cambie y ponga escrito "¡Te voy a chupar la fuerza!"
 *    que cambie la foto por una de Darth Vader
 *    que cambie el atributo alt="" de la foto por  "foto de Darth Vader"
 * 
 *    que el texto del botón cambie a "Light Mode"
 *    que el fondo del botón pase a ser blanco
 *    que el colro del texto del botón pase a ser "main-color"
 * 
 *  * Cuando le demos click al botón otra vez, que vuelva al estado incial
 * 
 */

const boton = document.querySelector('#btn')
let isDarkMode = false


const handleDarkMode = () => {
    const h1 = document.querySelector('#title')
    const photo = document.getElementById('photo')


    document.body.classList.toggle('dark') 
    if(isDarkMode){
        boton.innerHTML = 'Dark Mode'
        h1.innerHTML = '¡Que la fuerza te acompañe!'
        photo.src = ('src', 'https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630409487_516005_1630409560_noticia_normal.jpg')
    }else{
        boton.innerHTML = 'Light Mode'
        h1.innerHTML = '¡Te voy a chupar la fuerza!'
        photo.src = ('src', ' https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&w=1000&q=80')
    } 
    
    isDarkMode = !isDarkMode
}

boton.addEventListener('click',handleDarkMode )



