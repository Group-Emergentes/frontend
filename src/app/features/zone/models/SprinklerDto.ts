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

export class ActiveSprinkler {
  isManual: boolean;
  zoneId: number;

  constructor() {
    this.isManual = true;
    this.zoneId = 0;
  }

}

