import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {URLS} from 'src/Constants/Constant'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashAnalyticsService {

  constructor(private http:HttpClient) { }
  Dash_Info():Observable<any>{
    return this.http.get(URLS.Dashbord_Info)
  }
  Dash_InfoMeteGaz():Observable<any>{
    return this.http.get(URLS.Dashbord_MeterGaz)
  }
  Dash_InfoSFElec():Observable<any>{
    return this.http.get(URLS.Dashbord_SfElec)
  }
  Dash_InfoSFGAz():Observable<any>{
    return this.http.get(URLS.Dashbord_SfGaz)
  }
}
