import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Sprinkler} from "../../models/Sprinkler";
import {BaseService} from "../../../../shared/services/base/base.service";
import {ActiveSprinkler} from "../../models/SprinklerDto";


@Injectable({
  providedIn: 'root'
})
export class SprinklerService extends BaseService<any>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.endPoint = 'api/sprinklers';
  }

  activeAllSprinklers():Observable<any>{
    let activeSprinkler:ActiveSprinkler = new ActiveSprinkler();
    activeSprinkler.zoneId = 1;
    activeSprinkler.isManual = true;

    return this.http.post(`${this.buildUrl()}/zone/active-sprinklers`, activeSprinkler);
  }

  disableAllSprinklers(zoneId:number):Observable<any>{
    return this.http.post(`${this.buildUrl()}/zone/disable-sprinklers/${zoneId}`,null);
  }

  getSprinklersByZoneId(zoneId:number):Observable<any>{
    return this.http.get(`${this.buildUrl()}/zone/${zoneId}`);
  }


}
