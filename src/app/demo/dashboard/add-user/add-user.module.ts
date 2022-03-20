import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import {AddUserComponent} from './add-user.component'
import {SharedModule} from '../../../theme/shared/shared.module';


/* from template  */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
/* required for working page   */

@NgModule({
 
  imports: [
    CommonModule,
    AddUserRoutingModule,
    SharedModule,
    StorageServiceModule,
  
    HttpClientModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule,
    FormsModule, ReactiveFormsModule
  ] ,
  declarations: [AddUserComponent],
})
export class AddUserModule { }
