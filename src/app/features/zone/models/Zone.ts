export class Zone {
  id:number;
  name: string;
  cropType: string;
  width: number;
  length: number;
  minimumTemperature: number;
  maximumTemperature: number;
  minimumHumidity: number;
  maximumHumidity: number;

  constructor() {
    this.id=0;
    this.name = "";
    this.cropType = "";
    this.width = 0;
    this.length = 0;
    this.minimumTemperature = 0;
    this.maximumTemperature = 0;
    this.minimumHumidity = 0;
    this.maximumHumidity = 0;
  }

}
