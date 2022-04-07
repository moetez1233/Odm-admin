import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(module => module.DashAnalyticsModule)
      },
      {
        path: 'profileUser',
        loadChildren: () => import('./profile-user/profile-user.module').then(module => module.ProfileUserModule)
      },
      {
        path: 'AddUser',
        loadChildren: () => import('./add-user/add-user.module').then(module => module.AddUserModule)
      },
      {
        path: 'listUser',
        loadChildren: () => import('./list-user/list-user.module').then(module => module.ListUserModule)
      },
      {
        path: 'Ajouter_SF',
        loadChildren: () => import('./import-sf/import-sf.module').then(module => module.ImportSfModule)
      },
      {
        path: 'Consulter_SF',
        loadChildren: () => import('./consulter-sf/consulter-sf.module').then(module => module.ConsulterSfModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
