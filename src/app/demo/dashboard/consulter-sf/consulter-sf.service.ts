import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from 'src/Constants/Constant';
@Injectable({
  providedIn: 'root'
})
export class ConsulterSfService {

  constructor(private http:HttpClient) { }


getAllSf(page:any):Observable<any>{
    return this.http.get(URLS.GetAllSF+`?page=${page}`);
  }
  GetSearchSf(search:string){
    return this.http.get(URLS.SearchSf+`/${search}`)
  }
  getAllMeters(nameSf:string,page:any):Observable<any>{
    return this.http.get(URLS.Get_Meters_By_SF+`/${nameSf}`+`?page=${page}`);
  }
  getAllMetersGAZ(nameSf:string,page:any):Observable<any>{
    return this.http.get(URLS.Get_Meters_GAZ_By_SF+`/${nameSf}`+`?page=${page}`);
  }

  getSfByStatus(status:string){
   
    
    return this.http.get(URLS.GetSFByStatus +`/${status}`)
  }
  getHistBySF(name:String){
return this.http.get(URLS.GetHist_By_SF+`/${name}`)
  }

  Reject_SF(name:string){
    return this.http.get(URLS.Reject_SF+`/${name}`)
  }
  Resume_SF_Serv(name:string){
    return this.http.delete(URLS.Resume_SF+`/${name}`)
  }
  historiqueMeter(nameSf:string,mrid:string){
    if(nameSf.startsWith("AMM"))return this.http.get(URLS.Histo_Meter_Elec+`/${mrid}`);
    else return this.http.get(URLS.Histo_Meter_Gaz+`/${mrid}`);
  }
  getConfigParam(nameSf:string,mrid:String){
    if(nameSf.startsWith("AMM"))return this.http.get(URLS.ConfigParamInfo_Elec+`/${mrid}`)
    else return this.http.get(URLS.ConfigParamInfo_Gaz+`/${mrid}`)
      }
  RetryMeter(nameSf:string,mrid:string,RequestId:String){
        if(nameSf.startsWith("AMM"))return this.http.get(URLS.RetryMeter_Elec+`/${mrid}`+`/${RequestId}`)
        else return this.http.get(URLS.RetryMeter_Gaz+`/${mrid}`+`/${RequestId}`)
          }
  GetSFByType(type:string){
    return this.http.get(URLS.List_SF_ByType+`/${type}`)
  }
  getMetes_Failed(nameSf:string){
    if(nameSf.startsWith("AMM"))return this.http.get(URLS.List_Meter_Elec_failed+`/${nameSf}`)
    else return this.http.get(URLS.List_Meter_Gaz_failed+`/${nameSf}`)
      }
}
