import {Data} from "@angular/router";
import {RacePaticipant} from "./raceParticipant";

export class Race {

  id: number;

  checkinTime: Data;

  raceParticipantOne: RaceParticipant;

  raceParticipantTwo: RaceParticipant;

  winner: RaceParticipant;

  raceWasHeld: boolean;

  constructor(id: number, checkinTime: Data, raceParticipantOne: RacePaticipant, raceParticipantTwo: RacePaticipant, winner: RacePaticipant, raceWasHeld: boolean) {
    this.id = id;
    this.checkinTime = checkinTime;
    this.raceParticipantOne = raceParticipantOne;
    this.raceParticipantTwo = raceParticipantTwo;
    this.winner = winner;
    this.raceWasHeld = raceWasHeld;
  }
}
