import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {environment} from "../../../../environments/environment";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketSensorData {
  baseUrl: string = environment.socketBasePath;
  url:string = this.baseUrl + '/ws/register-sensor-data/1';

  private socket$!: WebSocketSubject<any>;
  private messagesSubject = new Subject<any>();
  public messages$: Observable<any> = this.messagesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket$ = webSocket(this.url);

    this.socket$.subscribe({
      next: (msg) => {
        this.messagesSubject.next(msg);
      },
      error: (err) => console.error("Error en WebSocket:", err),
      complete: () => console.log("Conexión WebSocket cerrada"),
    });
  }
  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  closeConnection() {
    this.socket$.complete();
  }
}
