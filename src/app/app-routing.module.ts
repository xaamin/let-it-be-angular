import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms-usage/forms-usage.module').then(m => m.FormsUsageModule),
    data: {
      title: 'Forms'
    }
  },
  {
    path: 'tables',
    loadChildren: () => import('./data-tables/data-tables.module').then(m => m.DataTablesModule),
    data: {
      title: 'Tables'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
