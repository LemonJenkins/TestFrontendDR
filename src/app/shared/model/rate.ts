import {RegisteredUser} from "./registeredUser";
import {Race} from "./race";
import {RacePaticipant} from "./raceParticipant";

export class Race {
  id: number;

  registeredUser: RegisteredUser;

  rate: number;

  race: Race;

  raceParticipant: RaceParticipant;

  win: boolean;

  constructor(id: number, registeredUser: RegisteredUser, rate: number, race: Race, raceParticipant: RaceParticipant, win: boolean) {
    this.id = id;
    this.registeredUser = registeredUser;
    this.rate = rate;
    this.race = race;
    this.raceParticipant = raceParticipant;
    this.win = win;
  }
}
