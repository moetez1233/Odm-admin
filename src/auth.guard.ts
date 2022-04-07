import { AuthSignINService } from "./app/demo/pages/authentication/auth-signin/auth-sign-in.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authSignINService: AuthSignINService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log(this.authSignINService.TokenExist());
    
    if (this.authSignINService.TokenExist()) {
      return true;
    } else {
      this.router.navigate(['/auth/signin'])
      return false
    }
  }
}
