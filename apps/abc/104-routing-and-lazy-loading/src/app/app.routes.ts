// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'hr', pathMatch: 'full' },
  {
    path: 'hr',
    loadComponent: () =>
      import('./hr-files/hr-files-search.component')
  },
  {
    path: 'payroll',
    loadComponent: () => import('./payroll/payroll-search.component')
  }
];
