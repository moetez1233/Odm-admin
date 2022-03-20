import { ListUserComponent } from './list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';



/* from template  */
import {SharedModule} from '../../../theme/shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

/* required for working page   */

@NgModule({
  
  imports: [
    CommonModule,
    ListUserRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,
    HttpClientModule ,
    StorageServiceModule,NgbCollapseModule
  ],
  declarations: [ListUserComponent]
})
export class ListUserModule { }
