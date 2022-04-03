import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEntryComponent } from './table-usage/new-entry/new-entry.component';
import { TableUsageComponent } from './table-usage/table-usage.component';

const routes: Routes = [
  {
    path: '',
    component: TableUsageComponent,
    data: {
      title: 'Tables'
    },
    children: [
      {
        path: 'new-entry',
        component: NewEntryComponent,
        data: {
          title: 'New entry'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule { }
