import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.routes').then(m => m.WELCOME_ROUTES)
  },
  {
    path: 'offer',
    loadChildren: () => import('./offer/offer.module').then((m) => m.OfferModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {}
