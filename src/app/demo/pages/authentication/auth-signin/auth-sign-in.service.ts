import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {URLS} from 'src/Constants/Constant'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthSignINService {

constructor(private http:HttpClient){}

 loginuser(data): Observable<any>{

    return this.http.post(URLS.logIn,data,httpOptions);
  }


}
