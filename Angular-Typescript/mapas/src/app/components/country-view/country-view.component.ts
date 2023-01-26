import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  myCountry!: Observable<Country[]>;
  constructor(
    private coutriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //tengo capturar el codigo pais de ruta para hacer la peticion al servicio.
    this.activatedRoute.params.subscribe((params: any) => {
      let code: string = params.code
      this.myCountry = this.coutriesService.getByCode(code);
    })

  }

}
