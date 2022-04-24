import { BasicSpinnerComponent } from './../../ui-elements/ui-basic/basic-spinner/basic-spinner.component';
import { ImportSfComponent } from './import-sf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportSfRoutingModule } from './import-sf-routing.module';

/* from template  */
import {SharedModule} from '../../../theme/shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {  HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

/* required for working page   */
@NgModule({
  declarations: [ImportSfComponent,BasicSpinnerComponent],
  imports: [
    CommonModule,
    ImportSfRoutingModule,
    StorageServiceModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule,
    SharedModule
  ]
})
export class ImportSfModule { }
