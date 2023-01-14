import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getSearch() {
    //voy a redirigir a traves de queryparams a la ruta dashboard/characters
    let url = (this.search !== "") ? `dashboard?name=${this.search}` : '/dashboard';
    this.router.navigateByUrl(url);
  }


}
