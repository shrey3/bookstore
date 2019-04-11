import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "../services/app.users.service";
import { CustomDirectivesModule } from '../Directives/app.directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomDirectivesModule
  ],
  providers:[UserService]
})
export class LoginModule { 

}
