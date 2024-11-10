import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../../shared/services/base/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends BaseService<any>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.endPoint = 'api/zones';
  }

  getZonesByClient(id:string):Observable<any>{
    return this.http.get(`${this.buildUrl()}/client/${id}`);
  }

  getSoilMoistureReport(zoneId:number):Observable<any>{
    return this.http.get(`${this.buildUrl()}/${zoneId}/soil-moisture-report`);
  }

}
