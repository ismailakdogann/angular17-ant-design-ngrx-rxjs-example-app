import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
];
