import { TokenStorageServiceService } from './../Service/token-storage-service.service';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenStorage:TokenStorageServiceService,private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token =this.tokenStorage.getToken()
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' +token
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          this.router.navigate(['/auth/signin']);
        }
        if (error.status === 400) {
          alert(error.error);
        }
        return throwError(error);
      }));
  }

}
