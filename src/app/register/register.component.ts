import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/app.users.service";
import { User } from "../login/login.user.model";
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  userAddError: boolean = false;
  myUsers: User[] = [];
  newUser: User = new User(null, null, null);
  alertValue: boolean;

  user: User = {
    id: null,
    username: null,
    password: null
  };

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
  }

  addingUser(user) {

    console.log(this.userSignUpForm)
    this.newUser.id = user.id + 1;
    this.newUser.username = user.username;
    this.newUser.password = user.password;

    this.userService.addNewUser(this.newUser).subscribe(
      (addedUser: User) => {
        this.myUsers.push(addedUser);
        this.userAddError = false;
        console.log(this.newUser);
      },
      error => {
        console.log("Error");
        this.userAddError = true;
      }
    );

  }

  userSignUpForm = new FormGroup({
    
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password: new FormControl(null, 
        [Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    
});

}
