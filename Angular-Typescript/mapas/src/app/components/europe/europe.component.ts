import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
  lat: number = 40;
  long: number = -3;
  arrCountries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

 
    async ngOnInit(): Promise<void> {
      this.arrCountries = await this.countriesService.getAll();
      console.log(this.arrCountries)
    }
  }


