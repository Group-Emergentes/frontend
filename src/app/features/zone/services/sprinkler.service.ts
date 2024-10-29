import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Sprinkler} from "../models/Sprinkler";


@Injectable({
  providedIn: 'root'
})
export class SprinklerService {
  basePath = environment.serverBasePath;
  url: string = '/Sprinkler';

  private resourcePath(): string {
    return `${this.basePath}${this.url}`;
  }

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  getSprinkler(): Observable<Sprinkler[]> {
    return this.http
      .get<Sprinkler[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return [];
  }

  createSprinkler(sprinkler: Sprinkler): Observable<Sprinkler> {
    return this.http.post<Sprinkler>(this.resourcePath(), sprinkler);
  }

  getSprinklerById(id: number): Observable<Sprinkler> {
    return this.http.get<Sprinkler>(`${this.resourcePath()}/${id}`);
  }

  updateSprinkler(sprinkler: Sprinkler): Observable<Sprinkler> {
    return this.http.put<Sprinkler>(`${this.resourcePath()}/${sprinkler.id}`, sprinkler);
  }

  deleteSprinkler(sprinklerId: number): Observable<void> {
    return this.http.delete<void>(`${this.resourcePath()}/${sprinklerId}`);
  }
}
