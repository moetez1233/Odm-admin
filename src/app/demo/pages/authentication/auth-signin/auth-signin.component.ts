import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthSignINService } from './auth-sign-in.service';
import { Observable, of, Subject,Subscriber } from 'rxjs';

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
  constructor(private router: Router,private authSignINService:AuthSignINService,private formBuilder: FormBuilder,private http?: HttpClient) { }

  ngOnInit() {
    this.registeForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async onSubmit(){
    if(!this.isSubmitted){
      this.isSubmitted=true;
      if(!this.registeForm.invalid){
        const email=this.registeForm.value.email;
        const password=this.registeForm.value.password;
        const data={
          "email":email,
          "password":password
        }
        //console.log(this.registeForm.value);
        this.authSignINService.loginuser(data).subscribe((res) => {
          console.log(res);
       this.router.navigateByUrl("/dashboard/analytics")
        
        })
      }

  }
}}
