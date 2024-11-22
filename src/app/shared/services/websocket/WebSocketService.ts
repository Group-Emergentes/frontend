import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket = webSocket('wss://aharon.up.railway.app/ws/alert-system');

  constructor() {}

  getNotifications() {
    return this.socket.asObservable();
  }
}
