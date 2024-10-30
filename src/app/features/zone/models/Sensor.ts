export interface Sensor {
  id: number;
  name: string;
  sensorType: string;
  minimum: number;
  maximum: number;
  currentData: number;
  zoneId: number;
}

