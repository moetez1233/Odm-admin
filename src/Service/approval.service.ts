import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  data=[]
  private approvalStageMessage = new BehaviorSubject<any>(this.data);

  currentApprovalStageMessage = this.approvalStageMessage.asObservable();
 
  constructor() { }
  updateApprovalMessage(data: any) {
    this.approvalStageMessage.next(data)
    }
}
