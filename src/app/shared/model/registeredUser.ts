export class RegisteredUser {
  id: number;

  name: string;

  surname: string;

  nickname: string;

  availabilityMachine: boolean;

  age: number;

  pass: srtring;

  email: string;


  constructor(id: number, name: string, surname: string, nickname: string, availabilityMachine: boolean, age: number, pass: srtring, email: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.availabilityMachine = availabilityMachine;
    this.age = age;
    this.pass = pass;
    this.email = email;
  }
}
