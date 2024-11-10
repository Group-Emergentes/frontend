export class Sprinkler {
  sprinklerId: string;
  active: boolean;
  lastActivation: Date;
  zoneId:number;

  constructor(){
    this.sprinklerId = "";
    this.active = false;
    this.lastActivation = new Date;
    this.zoneId = 0;
  }
}
