export class CreateSprinkler{
  sprinklerId: string;
  zoneId: number;

  constructor() {
    this.sprinklerId = "";
    this.zoneId = 0;
  }

  isValid(){
    return this.sprinklerId !=="" && this.zoneId > 0;
  }
}

export class SprinklerAction  {
  isManual: boolean;
  zoneId: number;
  active: boolean

  constructor() {
    this.isManual = true;
    this.zoneId = 0;
    this.active = false;
  }

}

