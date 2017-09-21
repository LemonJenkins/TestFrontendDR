import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Data} from "@angular/router";

@Component({
  selector: 'registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent {

  title: string = "registration".toLocaleUpperCase();
  haveACars: boolean = false;

  setOfHavingMachines() {
    this.haveACars = !this.haveACars;
  }

  registrationUser(form: NgForm, data: any) {

    console.log(form);
    console.log(this.haveACars);
    console.log(data);
  }

}
