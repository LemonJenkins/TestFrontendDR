import {Component} from '@angular/core';

const races =
[
  {
    raceId: 111,
    raceParticipantOne: 'Ivan1',
    raceParticipantTwo : 'Fedor1',
    carRaceParticipantOne : 'Audi1',
    carRaceParticipantTwo : 'Bmv1'
  },
  {
    raceId : 222,
    raceParticipantOne : 'Ivan2'.toUpperCase(),
    raceParticipantTwo : 'Fedor2'.toUpperCase(),
    carRaceParticipantOne : 'Audi2'.toUpperCase(),
    carRaceParticipantTwo : 'Bmv2'.toUpperCase()
  },
  {
    raceId : 333,
    raceParticipantOne : 'Ivan33'.toUpperCase(),
    raceParticipantTwo : 'Fedor33'.toUpperCase(),
    carRaceParticipantOne : 'Audi33'.toUpperCase(),
    carRaceParticipantTwo : 'Bmv33'.toUpperCase()
  },
  {
    raceId : 444,
    raceParticipantOne : 'Ivan4'.toUpperCase(),
    raceParticipantTwo : 'Fedor4'.toUpperCase(),
    carRaceParticipantOne : 'Audi4'.toUpperCase(),
    carRaceParticipantTwo : 'Bmv4'.toUpperCase()
  },
  {
    raceId :555,
    raceParticipantOne : 'Ivan5'.toUpperCase(),
    raceParticipantTwo : 'Fedor5'.toUpperCase(),
    carRaceParticipantOne : 'Audi5'.toUpperCase(),
    carRaceParticipantTwo : 'Bmv5'.toUpperCase()
  },
];

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  title = 'Home'.toUpperCase();

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
