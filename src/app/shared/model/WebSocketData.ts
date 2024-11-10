export interface WebSocketData {
  message: string;
  sensorData: { sensorId: string; value: number }[];
  activeSprinklers: boolean;
}
