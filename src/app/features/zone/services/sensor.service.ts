import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Sensor} from "../models/Sensor";


@Injectable({
  providedIn: 'root'
})
export class SensorService {
  basePath = environment.serverBasePath;
  url: string = '/Sensor';

  private resourcePath(): string {
    return `${this.basePath}${this.url}`;
  }

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  getSensors(): Observable<Sensor[]> {
    return this.http
      .get<Sensor[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return [];
  }

  createSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.resourcePath(), sensor);
  }

  getSensorById(id: number): Observable<Sensor> {
    return this.http.get<Sensor>(`${this.resourcePath()}/${id}`);
  }

  updateSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>(`${this.resourcePath()}/${sensor.id}`, sensor);
  }

  deleteSensor(sensorId: number): Observable<void> {
    return this.http.delete<void>(`${this.resourcePath()}/${sensorId}`);
  }
}
