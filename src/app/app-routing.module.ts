import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductinListComponent } from './control/add-productin-list/add-productin-list.component';
import { ControlComponent } from './control/control.component';
import { LoginComponent } from './control/login/login.component';
import { RegisterComponent } from './control/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: ControlComponent},
  {
    path: 'login',
    component: ControlComponent
  },
  {path: 'signup', component: RegisterComponent},
 {
  path: 'profile/:id',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [
    {path: 'profile/:id/dash', component: DashboardComponent},
    {path: 'profile/:id/posts',  component: PostsComponent},
    {  path: 'profile/:id/addProductinlist', component: AddProductinListComponent }
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
