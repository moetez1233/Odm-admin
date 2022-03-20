import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {URLS} from 'src/Constants/Constant'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http:HttpClient) { }

  listUser(){
    return this.http.get(URLS.ListUser);
  }
}
