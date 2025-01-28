import { ExtraOptions, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'employee-processing', pathMatch: 'full' },
  {
    path: 'employee-processing',
    loadComponent: () =>
      import('./employee-processing/employee.component'),
    data: { name: 'EmployeeProcessing' }
  },
  {
    path: 'fluid-cms',
    loadComponent: () => import('./fluid-cms/fluid-cms.component'),
    data: { name: 'FluidCMS' }
  },
  {
    path: 'static-cms',
    loadComponent: () => import('./static-cms/static-cms.component'),
    data: { name: 'StaticCMS' }
  },
  {
    path: 'silicon-wafers',
    loadComponent: () =>
      import('./silicon-wafers/silicon-wafers.component'),
    data: { name: 'SiliconWafers' }
  }
];

export const config: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled'
};
