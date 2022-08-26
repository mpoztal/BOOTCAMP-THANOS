class Destination {
  constructor (dest) {
    this.id = dest.id
    this.city = dest.city
    this.country = dest.country
    this.photo = dest.photo
    this.visited = dest.visited
    this.favorite = dest.favorite

    this.destinationHTML = document.createElement('article')

    this.deleteButton = document.createElement('i')
    this.editButton = document.createElement('i')
    this.heartButton = document.createElement('i')

    this.createMarkup()
  }

  createMarkup () {
    this.destinationHTML.className = 'destination bg-white shadow rounded p-2 relative'
    this.destinationHTML.innerHTML = `
    <img class="w-full aspect-video object-cover" src="${this.photo}" alt="${this.city}, ${this.country}">   

    <div class="destInfo flex items-center mt-2">
      <h2 class="text-xl mr-3">${this.city}</h2>
      <h3 class="bg-yellow-300 px-2 rounded-full">${this.country}</h3>      
    </div>           
    `
    this.createEditButton()
    this.createDeleteButton()
    this.createHeartButton()
  }

  createDeleteButton () {
    this.deleteButton.className = 'deleteIcon text-red-500 cursor-pointer fa-solid fa-trash-can hover:scale-125 transition-transform'
    this.destinationHTML.querySelector('.destInfo').append(this.deleteButton)
  }

  createEditButton () {
    this.editButton.className = 'editIcon fa-solid fa-pen-to-square text-violet-600 ml-auto mr-3 cursor-pointer hover:scale-125 transition-transform'
    this.destinationHTML.querySelector('.destInfo').append(this.editButton)
  }

  createHeartButton () {
    this.heartButton.className = `favoriteIcon text-red-500 ${this.favorite ? 'fa-solid' : 'fa-regular'} fa-heart absolute top-3 left-4 cursor-pointer text-xl hover:scale-125 transition-transform`
    this.destinationHTML.append(this.heartButton)
  }
}

export default Destination
