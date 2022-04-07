import { AuthGuard } from 'src/auth.guard';
import { ConsulterSfComponent } from './consulter-sf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:ConsulterSfComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterSfRoutingModule { }
