import { BasicCarouselComponent } from './../../ui-elements/ui-basic/basic-carousel/basic-carousel.component';
import { BasicTabsPillsComponent } from './../../ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.component';
import { ConsulterSfComponent } from './consulter-sf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterSfRoutingModule } from './consulter-sf-routing.module';
/* from template  */
import {SharedModule} from '../../../theme/shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule, NgbTooltipModule, NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

/* end from template   */

/*  required for tabs Module */

import { BasicTabsPillsRoutingModule } from './../../ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills-routing.module';

/*  end required tabs Module  */

@NgModule({
  declarations: [BasicCarouselComponent,ConsulterSfComponent,BasicTabsPillsComponent],
  imports: [
    CommonModule,
    ConsulterSfRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule,
    HttpClientModule,
    StorageServiceModule,
    SharedModule,
    BasicTabsPillsRoutingModule,
    NgbCarouselModule
  ]
})
export class ConsulterSfModule { }
