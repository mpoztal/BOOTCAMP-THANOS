const myNewTitle = document.getElementById('title')
myNewTitle.innerHTML = 'Mi nuevo texto'
myNewTitle.id = 'Bienvenid@'
console.log(myNewTitle)



const button = document.createElement("button");
button.innerHTML = "Haz clic aquí";
myNewTitle.after(button)
console.log(button)

button.classList.add('rounded')

button.style.backgroundColor = 'tomato'

button.style.color = 'white'

button.setAttribute('data-id', '12345')

button.dataset.title = "Soy un título"






