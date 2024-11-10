import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../../shared/services/base/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SensorService extends BaseService<any>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.endPoint = 'api/sensors';
  }

  getSensorsByZoneId(zoneId:string):Observable<any>{
    return this.http.get(`${this.buildUrl()}/${zoneId}`);
  }

}
