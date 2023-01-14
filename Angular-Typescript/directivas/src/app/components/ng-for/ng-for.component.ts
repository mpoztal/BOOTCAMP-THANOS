import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  numeros: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
  todosEpisodios: any[] = [];
  episodios: any[] = []

  constructor() {
    this.todosEpisodios = new Array(
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' },
    )
    this.episodios = this.todosEpisodios;
   }


  ngOnInit(): void {
  }

  selectDirector($event: any): void {
    console.log($event.target.value);

// OPCION 1

    //if ($event.target.value !== "") {
      //this.episodios = this.todosEpisodios.filter(episodio => episodio.director === $event.target.value);
    //}else {
      //this.episodios = this.todosEpisodios;
    //}

    // OPCION 2

    this.episodios = this.todosEpisodios.filter(episodio => episodio.director.includes($event.target.value))
   
  }

}
