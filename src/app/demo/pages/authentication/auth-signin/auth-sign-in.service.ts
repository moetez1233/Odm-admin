import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {URLS} from 'src/Constants/Constant'
@Injectable({
  providedIn: 'root'
})
export class AuthSignINService {

constructor(private http:HttpClient){}
 loginuser(data){

    return this.http.post("http://localhost:9098/login",data);
  }

}
