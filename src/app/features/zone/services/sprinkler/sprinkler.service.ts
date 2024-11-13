import { Injectable } from '@angular/core';
import {HttpClient, } from "@angular/common/http";
import { Observable} from "rxjs";
import {BaseService} from "../../../../shared/services/base/base.service";
import {SprinklerAction} from "../../models/SprinklerDto";


@Injectable({
  providedIn: 'root'
})
export class SprinklerService extends BaseService<any>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.endPoint = 'api/sprinklers';
  }

  activeAllSprinklers():Observable<any>{
    let sprinklerAction:SprinklerAction = new SprinklerAction();
    sprinklerAction.zoneId = 1;
    sprinklerAction.isManual = true;
    sprinklerAction.active =  true;

    return this.http.post(`${this.buildUrl()}/zone/active-disable-sprinklers`, sprinklerAction);
  }

  disableAllSprinklers():Observable<any>{
    let sprinklerAction:SprinklerAction = new SprinklerAction();
    sprinklerAction.zoneId = 1;
    sprinklerAction.isManual = true;
    sprinklerAction.active =  false;

    return this.http.post(`${this.buildUrl()}/zone/active-disable-sprinklers`,sprinklerAction);
  }

  getSprinklersByZoneId(zoneId:number):Observable<any>{
    return this.http.get(`${this.buildUrl()}/zone/${zoneId}`);
  }


}
