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
    return this.http.delete(URLS.Reject_SF+`/${name}`)
  }
  Resume_SF_Serv(name:string){
    return this.http.delete(URLS.Resume_SF+`/${name}`)
  }
}
