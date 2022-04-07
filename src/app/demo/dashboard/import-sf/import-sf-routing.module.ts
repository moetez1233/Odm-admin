import { ImportSfComponent } from './import-sf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:ImportSfComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportSfRoutingModule { }
