import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './containers/LandingPage/landing.component';
import { LayoutComponent } from './common/components/layout/layout.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { RegisterComponent } from './containers/RegisterPage/register.component';
import { LoginComponent } from './containers/LoginPage/login.component';

import { UserService } from './common/services/user.service';
import { HttpClientService } from './common/services/httpClient.service';
import { TagInputComponent } from './common/components/tag-input/tag-input.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },{
    path: 'register',
    component: RegisterComponent,
  },{
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    TagInputComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, HttpClientService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
