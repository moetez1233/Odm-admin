import { environment } from './../../../../environments/environment';
import { Service } from 'src/Service/service';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {URLS} from 'src/Constants/Constant'
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AddUserService {

   serverPath: string =environment.serverPath
  constructor(private http:HttpClient) { }
createNewAdmin(data) : Observable<any>{
  //let headers = await Service.getHeadersWithIdToken();

 /*const headers = new HttpHeaders({
    //'Content-Type': 'application/json',
    'Authorization': "Bearer "+localStorage.getItem('tokenUser'),
  });
  console.log(headers);
  */
  
 console.log(this.serverPath);
 
 return this.http.post(this.serverPath + "/api/users/save", data,httpOptions)

}
}