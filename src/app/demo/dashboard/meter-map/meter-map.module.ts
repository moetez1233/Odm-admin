import { MeterMapComponent } from './meter-map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterMapRoutingModule } from './meter-map-routing.module';
/* from template  */
import {SharedModule} from '../../../theme/shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

/* required for working page   */

@NgModule({
  declarations: [MeterMapComponent],
  imports: [
    CommonModule,
    MeterMapRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule,
    StorageServiceModule,
    HttpClientModule,SharedModule

  ]
})
export class MeterMapModule { }
