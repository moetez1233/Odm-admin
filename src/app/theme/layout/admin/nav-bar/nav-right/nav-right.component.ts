import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() { }
  LogOut(){
    sessionStorage.removeItem("tokenUser");
    sessionStorage.removeItem("Email_User");
    sessionStorage.removeItem("Roles");
    this.route.navigateByUrl("/auth/signin")
  }
}
