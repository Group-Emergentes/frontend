import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  url:string = environment.serverBasePath;
  endPoint: string = "";

  constructor(protected http: HttpClient) {

  }

  protected buildUrl(): string {
    return `${this.url}/${this.endPoint}`;
  }

  getAll(): Observable<T[]>{
    return this.http.get<T[]>(this.buildUrl());
  }

  getById(id:string): Observable<T>{
    return this.http.get<T>(`${this.buildUrl()}/${id}`);
  }

  create(item:T):Observable<T>{
    return this.http.post<T>(this.buildUrl(), item);
  }

  update(item:T):Observable<T>{
    return this.http.put<T>(this.buildUrl(), item);
  }

  delete(id:string):Observable<void>{
    return this.http.delete<void>(`${this.buildUrl()}/${id}`);
  }


}
