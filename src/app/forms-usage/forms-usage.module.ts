import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SupportModule } from '../../modules/support/support.module';
import { FormsUsageRoutingModule } from './forms-usage-routing.module';
import { FormEventsComponent } from './form-events/form-events.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

@NgModule({
  declarations: [
    ReactiveValidationComponent,
    FormEventsComponent,
    NestedFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    SupportModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,

    FormsUsageRoutingModule,
  ]
})
export class FormsUsageModule { }
