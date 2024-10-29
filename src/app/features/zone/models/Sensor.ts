export interface Sensor {
  id: number;
  nameId: string;
  sensorType: string;
  minimum: number;
  maximum: number;
  currentData: number;
  zoneId: number;
}

