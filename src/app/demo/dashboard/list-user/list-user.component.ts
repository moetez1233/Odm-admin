import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AllUser } from 'src/Models/AllUser';
import{ListUserService}from './list-user.service'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  AddForm:FormGroup
  adminsColor = []
  adminIndex = false;
  updateUser=false;
  constructor(private formBuilder: FormBuilder,private listUserService:ListUserService) { }
allUser:AllUser[]
clickedAdmin: AllUser = new AllUser();
  ngOnInit() {
    this.AddForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      adress: ['', Validators.required],
      phone_number: ['', Validators.required],
      cin:['',Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      roles:['',Validators.required]

      
      
    });
    this.listUser()
  }

listUser(){
  this.listUserService.listUser().subscribe((res)=>{
    //console.log("result is "+res);
    
    this.allUser=res as AllUser[]

    
    
  })

}
adminClicked(index) {
  this.adminIndex=false;
  this.adminsColor.fill('light');
  this.adminsColor[index] = "primary"
  this.clickedAdmin = this.allUser[index];
  console.log(this.clickedAdmin);
  this.updateUser=false
  
 



}
  hoverOn(adminIndex) {
    if (adminIndex !== this.adminIndex)
      this.adminsColor[adminIndex] = "dark"
  }

  hoverOff(adminIndex) {
    if (adminIndex === this.adminIndex) {
      this.adminsColor[adminIndex] = "primary"
    } else {
      this.adminsColor[adminIndex] = "light"
    }
  }

  Update(){
    this.adminIndex=true;
this.updateUser=true
  
  }
}
