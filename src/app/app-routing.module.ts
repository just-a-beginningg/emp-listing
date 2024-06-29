import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/create-employee/create-employee.module').then(
        (m) => m.CreateEmployeeModule
      ),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/listing/listing.module').then((m) => m.ListingModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
