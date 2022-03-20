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

  constructor(private approvalService:ApprovalService) { }

  ngOnInit() {
    this.getdataChild()
    console.log("heello");
    this.approvalService.currentApprovalStageMessage.subscribe(msg => console.log(msg)
    );
    
  }
  getdataChild(){
    SharDashDataService.getData().subscribe((res)=>{
      
      console.log("data is : "+res);
      
    })
  }
}
