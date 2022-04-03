import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SupportModule } from '../../modules/support/support.module';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { TableUsageComponent } from './table-usage/table-usage.component';
import { NewEntryComponent } from './table-usage/new-entry/new-entry.component';
import { NewEntryDialogComponent } from './table-usage/new-entry-dialog/new-entry-dialog.component';
import { TablePaginationComponent } from './table-usage/table-pagination/table-pagination.component';


@NgModule({
  declarations: [
    TableUsageComponent,
    TablePaginationComponent,
    NewEntryComponent,
    NewEntryDialogComponent
  ],
  imports: [
    CommonModule,
    SupportModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DataTablesRoutingModule,
  ]
})
export class DataTablesModule { }
