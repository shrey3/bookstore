import { Directive, Input } from "@angular/core";
import { Validator, FormControl, AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { UserService } from '../services/app.users.service';
import { User } from '../login/login.user.model';

@Directive({
    selector:'[usernameValidator]',
    providers: [{provide: NG_VALIDATORS, 
        useExisting: CustomUsernameValidator, 
        multi: true}]
})

export class CustomUsernameValidator implements Validator {
    
    constructor(private userService: UserService)
    {
        
    }

    validate(input: AbstractControl): any {
        let username = input.value 
        console.log(username)

        this.userService.getUsers()
          .subscribe((returnedUser: User[]) => {
                for(let i = 0; i<returnedUser.length; i++){
                if (returnedUser[i].username === username) 
                    {
                        console.log(returnedUser[i].username);
                        return {usernameValidator: true}
                    } 
                    else 
                    {
                        return {usernameValidator: false}
                    }
                }
         });
    }
}