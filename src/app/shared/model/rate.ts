import {RegisteredUser} from "./registeredUser";
import {Race} from "./race";
import {RacePaticipant} from "./raceParticipant";

export class Rate {
  id: number;

  registeredUser: RegisteredUser;

  rate: number;

  race: Race;

  raceParticipant: RacePaticipant;

  win: boolean;

  constructor(id: number, registeredUser: RegisteredUser, rate: number, race: Race, raceParticipant: RacePaticipant, win: boolean) {
    this.id = id;
    this.registeredUser = registeredUser;
    this.rate = rate;
    this.race = race;
    this.raceParticipant = raceParticipant;
    this.win = win;
  }
}
