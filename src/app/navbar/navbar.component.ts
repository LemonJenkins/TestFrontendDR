import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  nameButtonHOME: string = 'Home'.toUpperCase();
  nameButtonRUNS: string = 'Races'.toUpperCase();
  nameButtonRATE: string = 'Rate'.toUpperCase();
  nameButtonREGISTR: string = 'registration'.toUpperCase();
  nameButtonLOGIN: string = 'login'.toUpperCase();

}
