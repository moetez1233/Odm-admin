import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthSignINService } from './auth-sign-in.service';
import { Observable, of, Subject,Subscriber } from 'rxjs';
import {ParentService} from '../../../../../ShareData/parent.service'
import{SharDashDataService} from '../../../dashboard/shar-dash-data.service'
import { User } from 'src/Models/User';
import { UserResp } from 'src/Models/UserResp';
import { ApprovalService } from "src/Service/approval.service";

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  registeForm: FormGroup;
  submitted = false;
  isSubmitted = false;
  type; alertText;
  UserLog:User
  UserResp:UserResp
  
  constructor(private approvalService:ApprovalService,private router: Router,private authSignINService:AuthSignINService,private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    localStorage.removeItem('tokenUser')

    this.registeForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async onSubmit(){
    
    if(!this.isSubmitted){
    //  this.isSubmitted=true;
      if(!this.registeForm.invalid){
        const email=this.registeForm.value.email;
        const password=this.registeForm.value.password;
        const data={
          "email":email,
          "password":password
        }
        //console.log(this.registeForm.value);
        this.authSignINService.loginuser(data).subscribe((res:any) => {
          if(res!='Bad credentials'){
            this.UserLog=res as User;
            localStorage.setItem('tokenUser',this.UserLog.access_Token)
            
            console.log("token is : "+localStorage.getItem('tokenUser'));

            this.approvalService.updateApprovalMessage(this.UserLog)
           console.log(this.UserLog);
           
            //ParentService.setData(res);
           
            SharDashDataService.setData("helloMoetez");
         this.router.navigateByUrl("/dashboard/analytics")
          }else{
            console.log("failur");
            
          }
       
        
        })
    

      }

  }
}}
