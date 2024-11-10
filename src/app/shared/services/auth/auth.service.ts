import { Injectable } from '@angular/core';
import {BaseService} from "../base/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<any>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.endPoint = 'api/auth';
  }

  register(item:any): Observable<any>{
    return this.http.post(`${this.buildUrl()}/register`, item);
  }

  login(item:any): Observable<any>{
    return this.http.post(`${this.buildUrl()}/login`, item);
  }

}
