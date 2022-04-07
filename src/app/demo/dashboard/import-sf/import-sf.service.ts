import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URLS} from 'src/Constants/Constant'

@Injectable({
  providedIn: 'root'
})
export class ImportSfService {

  constructor(private http:HttpClient) { }
upload(formData,email):Observable<any> {
    return this.http.post<FormData>(URLS.UploadSf+`/${email}`, formData);  
  }
}
