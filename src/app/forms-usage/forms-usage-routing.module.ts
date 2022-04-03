import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveValidationComponent,
    data: {
      title: 'Forms'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsUsageRoutingModule { }
