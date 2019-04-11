import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from './app.routing.component';
import { ContactComponent } from '../contact/contact.component';
import { RegisterComponent } from '../register/register.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginGuard } from './app.login.guard.service';
import { LogoutComponent } from '../login/logout.component';

const appRoutes : Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'contact', component: ContactComponent},
    {path: 'home', component: HomePageComponent, canActivate: [LoginGuard]},
    {path:'logout', component: LogoutComponent , canActivate: [LoginGuard]},
   // {path:'**', component: PageNotFound , canActivate: [LoginGuard]}

]

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginGuard],
  exports:[NavigationComponent]
})


export class AppRoutingModule { }
