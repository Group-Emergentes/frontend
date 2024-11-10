export class Sensor {

  sensorId:string;
  type:string;
  lastConnection:Date;
  zoneId:number
  value:number;

  constructor() {
    this.sensorId="";
    this.type="";
    this.lastConnection= new Date;
    this.zoneId=0;
    this.value = 0;
  }
}

