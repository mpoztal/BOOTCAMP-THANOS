import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() name: string = "";
  arrCharacters: Character[] = []
  next: string = "";
  prev: string = ""
  error: string = "";
  constructor(
    private charactersService: CharactersService 
    ){}

  ngOnInit(): void {
    this.charactersService.getAll().subscribe((data: any) => {
      this.arrCharacters = data.results
      this.next = data.info.next
      this.prev = data.info.prev
    })
  }

  ngOnChanges(): void {
    //cuando carguemos la peticion a la api esta puede devolver un error, con observables tenemos que crear un objeto observable con una funcion next y error

    const myObservable = {
      next: (data: any) => {
        this.arrCharacters = data.results
        this.next = data.info.next
        this.prev = data.info.prev
      },
      error: (err: any) => {
        this.arrCharacters = [];
        this.error = "No hay resultados para esta busqueda"
      }
    }

    this.charactersService.getByName(this.name).subscribe(myObservable)
  }

  gotoPage(url: string): void {
    this.charactersService.getAll(url).subscribe((data: any) => {
      this.arrCharacters = data.results
      this.next = data.info.next
      this.prev = data.info.prev
    })
  }





}
