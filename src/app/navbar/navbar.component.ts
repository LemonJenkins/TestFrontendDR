import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  nameButton1: string = 'Home'.toUpperCase();
  nameButton2: string = 'RUNS'.toUpperCase();
  nameButton3: string = 'Personal Area'.toUpperCase();
  nameButton4: string = 'Rates'.toUpperCase();
  nameButton5: string = 'registration'.toUpperCase();
  nameButton6: string = 'login'.toUpperCase();

}
