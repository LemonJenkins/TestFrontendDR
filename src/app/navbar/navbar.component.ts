import {Component} from '@angular/core';

const buttonContents =
  [
    {
      title: 'Home'.toUpperCase(),
      href: "/",
      icon: "home"
    },
    {
      title: 'Races'.toUpperCase(),
      href: "/runs",
      icon:"directions_car"
    },
    {
      title: 'Rate'.toUpperCase(),
      href: "/rate",
      icon:"attach_money"
    },
    {
      title: 'registration'.toUpperCase(),
      href: "/registration",
      icon:"accessibility"
    },
    {
      title: 'login'.toUpperCase(),
      href: "/login",
      icon:"input"
    },
    {
      title: 'Add Race'.toUpperCase(),
      href: "addRace",
      icon:"input"
    }
  ];

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  buttons = buttonContents;

}
