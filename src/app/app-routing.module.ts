import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './home-user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// ROUTES
const appRoutes: Routes = [

  { path: 'home', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
