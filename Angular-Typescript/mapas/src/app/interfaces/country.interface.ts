export interface Country {
     //la ? implica que ese caracter no será obligatorio a la hora de definir un elemento con este interfaz.
 
    name?: any;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: any;
    idd: any;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: any;
    translations: any;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: any;
    flag: string;
    maps: any;
    population: number;
    giny: any;
    fifa: string;
    car: any;
    timezones: string[];
    continents: string[];
    flags: any;
    coatOfArms: any;
    startOfWeek: string;
    capitalInfo: any;
    postalCode: any;
  
}
