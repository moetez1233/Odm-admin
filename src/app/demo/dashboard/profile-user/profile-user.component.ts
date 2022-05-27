import { ProfileUserService } from './profile-user.service';
import { AllUser } from './../../../../Models/AllUser';
import { Component, OnInit } from '@angular/core';
import{ParentService} from '../../../../ShareData/parent.service'
import{SharDashDataService} from '../shar-dash-data.service'
import { ApprovalService } from "../../../../Service/approval.service";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  constructor(private approvalService:ApprovalService,private profileUserService:ProfileUserService) { }
user:AllUser
  ngOnInit() {
   this.getUser()
  
    
  }
  getUser(){
   const email= sessionStorage.getItem("Email_User")
   console.log(email);
   this.profileUserService.getProfileUser(email).subscribe(res=>{
     console.log(res);
     this.user=res as AllUser
     
   })
   
  }
 
}
