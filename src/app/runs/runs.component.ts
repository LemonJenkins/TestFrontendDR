import {Component} from '@angular/core';
import {noUndefined} from "@angular/compiler/src/util";

const races =
  [
    {
      raceId: 111,
      raceParticipantOne: 'Ivan1',
      raceParticipantTwo : 'Fedor1',
      carRaceParticipantOne : 'Audi1',
      carRaceParticipantTwo : 'BMW1',
      modelCarRaceParticipantOne:'RS5',
      horsePowerCarRaceParticipantOne:'600hp',
      accelerationTo100CarRaceParticipantOne: 2.5,
      modelCarRaceParticipantTow:'M5',
      horsePowerCarRaceParticipantTow:'650hp',
      accelerationTo100CarRaceParticipantTow:'3.0',
      winner: "",
      raceWasHeld: false
    },
    {
      raceId : 222,
      raceParticipantOne : 'Ivan2'.toUpperCase(),
      raceParticipantTwo : 'Fedor2'.toUpperCase(),
      carRaceParticipantOne : 'Audi2'.toUpperCase(),
      carRaceParticipantTwo : 'Bmv2'.toUpperCase(),
      modelCarRaceParticipantOne:'RS5',
      horsePowerCarRaceParticipantOne:'600hp',
      accelerationTo100CarRaceParticipantOne: 2.5,
      modelCarRaceParticipantTow:'M5',
      horsePowerCarRaceParticipantTow:'650hp',
      accelerationTo100CarRaceParticipantTow:'3.0',
      winner:'Ivan1',
      raceWasHeld: true
    },
    {
      raceId : 333,
      raceParticipantOne : 'Ivan33'.toUpperCase(),
      raceParticipantTwo : 'Fedor33'.toUpperCase(),
      carRaceParticipantOne : 'Audi33'.toUpperCase(),
      carRaceParticipantTwo : 'Bmv33'.toUpperCase(),
      modelCarRaceParticipantOne:'RS5',
      horsePowerCarRaceParticipantOne:'600hp',
      accelerationTo100CarRaceParticipantOne: 2.5,
      modelCarRaceParticipantTow:'M5',
      horsePowerCarRaceParticipantTow:'650hp',
      accelerationTo100CarRaceParticipantTow:'3.0',
      winner:'Ivan1',
      raceWasHeld: true
    },
    {
      raceId : 444,
      raceParticipantOne : 'Ivan4'.toUpperCase(),
      raceParticipantTwo : 'Fedor4'.toUpperCase(),
      carRaceParticipantOne : 'Audi4'.toUpperCase(),
      carRaceParticipantTwo : 'Bmv4'.toUpperCase(),
      modelCarRaceParticipantOne:'RS5',
      horsePowerCarRaceParticipantOne:'600hp',
      accelerationTo100CarRaceParticipantOne: 2.5,
      modelCarRaceParticipantTow:'M5',
      horsePowerCarRaceParticipantTow:'650hp',
      accelerationTo100CarRaceParticipantTow:'3.0',
      winner:'Ivan1',
      raceWasHeld: true
    },
    {
      raceId :555,
      raceParticipantOne : 'Ivan5'.toUpperCase(),
      raceParticipantTwo : 'Fedor5'.toUpperCase(),
      carRaceParticipantOne : 'Audi5'.toUpperCase(),
      carRaceParticipantTwo : 'Bmv5'.toUpperCase(),
      modelCarRaceParticipantOne:'RS5',
      horsePowerCarRaceParticipantOne:'600hp',
      accelerationTo100CarRaceParticipantOne: 2.5,
      modelCarRaceParticipantTow:'M5',
      horsePowerCarRaceParticipantTow:'650hp',
      accelerationTo100CarRaceParticipantTow:'3.0',
      winner:'Ivan1',
      raceWasHeld: true
    },
  ];

@Component({
  selector: 'runs',
  templateUrl: 'runs.component.html',
  styleUrls: ['runs.component.css']
})
export class RunsComponent {
  title = 'Rases'.toUpperCase();
  races = races;
  dataOfRace = this.getDate();

  getDate(): any {
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!
    let yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    return (mm + '/' + dd + '/' + yyyy);
  }


}
