import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  arrCharacters: Character[] = [];
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {

    //cuando carguemos el componente pedimos las queryParams

    this.activatedRoute.queryParams.subscribe(async (queryParams: any) => {
      if (queryParams.name !== undefined) {
        //buscamos por nombre
        this.arrCharacters = await this.charactersService.getByName(queryParams.name);
      }
      else {
        //cargamos todos los personajes
        this.arrCharacters = await this.charactersService.getAll();
      }
    })




  }

}
