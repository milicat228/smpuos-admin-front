import { NurseModule } from './nurse/nurse.module';
import { ResponseErrorInterceptor } from './auth/interceptor/resonpse-error-interceptor';
import { AuthModule } from './auth/auth.module';
import { BasicUiModule } from './basic-ui/basic-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/interceptor/jwt-interceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NursePageComponent } from './pages/nurse-page/nurse-page.component';
import { NurseFormPageComponent } from './pages/nurse-form-page/nurse-form-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NursePageComponent,
    NurseFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BasicUiModule,
    AuthModule,
    NurseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
