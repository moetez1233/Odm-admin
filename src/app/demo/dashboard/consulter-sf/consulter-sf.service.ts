import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from 'src/Constants/Constant';
@Injectable({
  providedIn: 'root'
})
export class ConsulterSfService {

  constructor(private http:HttpClient) { }


getAllSf():Observable<any>{
    return this.http.get(URLS.GetAllSF);
  }

  getSfByStatus(status:string){
   
    
    return this.http.get(URLS.GetSFByStatus +`/${status}`)
  }
}
