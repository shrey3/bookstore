import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirectivesModule } from './Directives/app.directives.module'
import { AppRoutingModule } from './routing/app.routing.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './login/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    HomePageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CustomDirectivesModule,
    AppRoutingModule,
    RegisterModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
