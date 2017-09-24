import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Data} from "@angular/router";

@Component({
  selector: 'addRace',
  templateUrl: 'addRace.component.html',
  styleUrls: ['addRace.component.css']
})
export class AddRaceComponent {

  title: string = "Add Race".toLocaleUpperCase();
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
