import { BasicModalComponent } from './../../ui-elements/ui-basic/basic-modal/basic-modal.component';
import { BreadcrumbPagingRoutingModule } from './../../ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module';
import { BreadcrumbPagingComponent } from './../../ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component';
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


/*  required for tabs Module */

import { BasicTabsPillsRoutingModule } from './../../ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills-routing.module';

/*  end required tabs Module  */
/*  required for pagination  */
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
/*  required for pagination  */

@NgModule({
  declarations: [BasicCarouselComponent,BasicModalComponent,ConsulterSfComponent,BasicTabsPillsComponent,BreadcrumbPagingComponent],
  imports: [
    CommonModule,
    ConsulterSfRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbPopoverModule, NgbProgressbarModule, NgbTabsetModule , NgbTooltipModule,NgbCollapseModule,
    HttpClientModule,
    StorageServiceModule,
    SharedModule,
    BasicTabsPillsRoutingModule,
    NgbCarouselModule,
    NgbButtonsModule, NgbPaginationModule,
    BreadcrumbPagingRoutingModule
  ]
})
export class ConsulterSfModule { }
