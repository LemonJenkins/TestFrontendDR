export class Car {
  id: number;

  mark: string;

  model: string;

  horsePower: number;

  accelerationTo100: number;

  maxSpeed: number;

  constructor(id: number, mark: string, model: string, horsePower: number, accelerationTo100: number, maxSpeed: number) {
    this.id = id;
    this.mark = mark;
    this.model = model;
    this.horsePower = horsePower;
    this.accelerationTo100 = accelerationTo100;
    this.maxSpeed = maxSpeed;
  }
}
