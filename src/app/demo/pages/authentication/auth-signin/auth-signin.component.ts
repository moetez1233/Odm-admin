import { TokenStorageServiceService } from "./../../../../../Service/token-storage-service.service";
import { ApiUserConnect } from "./../../../../../Models/ApiUserConnect";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthSignINService } from "./auth-sign-in.service";
import { Observable, of, Subject, Subscriber } from "rxjs";
import { ParentService } from "../../../../../ShareData/parent.service";
import { SharDashDataService } from "../../../dashboard/shar-dash-data.service";
import { User } from "src/Models/User";
import { UserResp } from "src/Models/UserResp";


import { ApprovalService } from "src/Service/approval.service";

@Component({
  selector: "app-auth-signin",
  templateUrl: "./auth-signin.component.html",
  styleUrls: ["./auth-signin.component.scss"],
})
export class AuthSigninComponent implements OnInit {
  registeForm: FormGroup;
  submitted = false;
  isSubmitted = false;
  type;
  alertText;
  apiUserConnect: ApiUserConnect;
  UserLog: User;
  UserInf: UserResp;

  constructor(
    private approvalService: ApprovalService,
    private router: Router,
    private authSignINService: AuthSignINService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private tokenStorage: TokenStorageServiceService
  ) {}

  ngOnInit() {
   

    this.registeForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  async onSubmit() {
    if (!this.isSubmitted) {
      //  this.isSubmitted=true;
      if (!this.registeForm.invalid) {
        const email = this.registeForm.value.email;
        const password = this.registeForm.value.password;
        const data = {
          email: email,
          password: password,
        };

        this.authSignINService.loginuser(data).subscribe((res: any) => {
          if (res != "Bad credentials") {
            this.apiUserConnect = res as ApiUserConnect;
            this.UserLog = this.parseJwt(this.apiUserConnect.access_Token);

          
            this.tokenStorage.SaveRoles(this.UserLog.roles);
            this.tokenStorage.saveEmailUser(this.UserLog.sub);
            this.tokenStorage.SaveToken(this.apiUserConnect.access_Token);

            //localStorage.setItem("tokenUser", this.apiUserConnect.access_Token);
            
            this.approvalService.updateApprovalMessage(this.UserLog.roles)

            this.type="success"
            this.alertText="Connexion success"
            this.router.navigateByUrl("/dashboard/analytics");
          } else {
            this.type="warning"
            this.alertText="Donnes incorrect , Verifier votre insertion"
          }
        });
      }
    }
  }
  parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );


    return JSON.parse(jsonPayload);
  }
}
