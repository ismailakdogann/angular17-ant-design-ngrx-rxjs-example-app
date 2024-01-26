import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

// routes
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class OfferRoutingModule {}
