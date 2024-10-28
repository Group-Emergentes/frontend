import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Zone} from "../models/Zone";
import {catchError, Observable, retry} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  basePath = environment.serverBasePath;
  url: string = '/Zone';

  private resourcePath(): string {
    return `${this.basePath}${this.url}`;
  }

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  getZones(): Observable<Zone[]> {
    return this.http
      .get<Zone[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return [];
  }

  createZone(zone: Zone): Observable<Zone> {
    return this.http.post<Zone>(this.resourcePath(), zone);
  }

  getZoneById(id: number): Observable<Zone> {
    return this.http.get<Zone>(`${this.resourcePath()}/${id}`);  // Petición GET para obtener el estudiante por ID
  }

  updateStudent(student: Zone): Observable<Zone> {
    return this.http.put<Zone>(`${this.resourcePath()}/${student.id}`, student);
  }
}
