export class CreateSensor {
  sensorId: string;
  type: string;
  zoneId:number;


  constructor() {
    this.sensorId = "";
    this.type = ""
    this.zoneId = 0;
  }

  isValid(){
    return this.sensorId !== "" && this.type !== "" && this.zoneId > 0;
  }
}
