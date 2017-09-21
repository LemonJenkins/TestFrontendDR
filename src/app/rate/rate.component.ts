import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

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

  addRate(form: NgForm) {
    console.log(form);
  }

}
