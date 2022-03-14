import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import{ProfileUserComponent} from './profile-user.component'

@NgModule({
 
  imports: [
    CommonModule,
    ProfileUserRoutingModule
  ],
  declarations: [ProfileUserComponent],
})
export class ProfileUserModule { }
