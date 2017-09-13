import {Component} from '@angular/core';

@Component({
  selector: 'rate',
  templateUrl: 'rate.component.html',
  styleUrls: ['rate.component.css']
})
export class RateComponent {

  title: string = "rate".toLocaleUpperCase();
  haveACars: boolean = false;

  setOfHavingMachines() {
    this.haveACars = !this.haveACars;
  }

  registrationUser(name: string, surname: string, email: string, nickname: string, password1: string, password2: string, dateOfBirth: any) {
    let names: string = name;
    let surnames: string = surname;
    let emails: string = email;
    let nicknames: string = nickname;
    let password1s: string = password1;
    let password2s: string = password2;
    let date = dateOfBirth;

    console.log(names, surnames, emails, nicknames, password1s, password2s, this.haveACars, date);
  }

}
