import {Car} from "./car";
import {RegisteredUser} from "./registeredUser";
import {Race} from "./race";

export class RacePaticipant {
  id: number;

  registeredUser: RegisteredUser;

  drivingExperienec: number;

  car: Car;

  race: Race;


  constructor(id: number, registeredUser: RegisteredUser, drivingExperienec: number, car: Car, race: Race) {
    this.id = id;
    this.registeredUser = registeredUser;
    this.drivingExperienec = drivingExperienec;
    this.car = car;
    this.race = race;
  }
}
