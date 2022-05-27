import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from 'src/Constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(private http:HttpClient) { }

  getProfileUser(email:string){
    return this.http.get(URLS.UserProfile+`/${email}`);
  }
}
