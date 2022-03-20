import { HttpHeaders, HttpClient } from '@angular/common/http';

export class Service {

    static async getHeadersWithIdToken(){
        /*const headers = await new HttpHeaders({
            'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      
            'Authorization':`ODM ${localStorage.getItem('tokenUser')}`,
          });
          return headers;*/
          var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `ODM ${localStorage.getItem('tokenUser')}`)
          }
          return header;
    }
}
