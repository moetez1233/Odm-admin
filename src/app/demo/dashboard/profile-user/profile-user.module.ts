import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import{ProfileUserComponent} from './profile-user.component'
/* from template  */
import {SharedModule} from '../../../theme/shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {  HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

/* required for working page   */
@NgModule({
 
  imports: [
    CommonModule,
    ProfileUserRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ProfileUserComponent],
})
export class ProfileUserModule { }
