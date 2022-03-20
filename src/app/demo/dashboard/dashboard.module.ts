import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
//import { ListUserComponent } from './list-user/list-user.component';
//import { AddUserComponent } from './add-user/add-user.component';
//import { ProfileUserComponent } from './profile-user/profile-user.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class DashboardModule { }
