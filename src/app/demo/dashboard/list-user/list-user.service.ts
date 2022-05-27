import { Observable } from 'rxjs';
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

  listUser():Observable<any>{
    return this.http.get(URLS.ListUser);
  }
  GetSearchUer(search:string):Observable<any>{
    return this.http.get(URLS.SearchUser+`/${search}`);
  }
  DeleteUser(email:string):Observable<any>{
    return this.http.delete(URLS.Delet +`/${email}`)
    
  }
  UpdateUser(data):Observable<any>{
    return this.http.put(URLS.Update,data);
  }
}
