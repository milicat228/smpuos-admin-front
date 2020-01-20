import { NurseFormPageComponent } from './pages/nurse-form-page/nurse-form-page.component';
import { NursePageComponent } from './pages/nurse-page/nurse-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouteGuardService } from './auth/service/route-guard.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './auth/service/login-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuardService]},
  { path: 'home', component: HomePageComponent,  canActivate: [RouteGuardService] },
  { path: 'nurse', component: NursePageComponent,  canActivate: [RouteGuardService] },
  { path: 'nurse/edit', component: NurseFormPageComponent,  canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
