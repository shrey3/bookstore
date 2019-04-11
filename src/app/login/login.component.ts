import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/app.users.service";
import { User } from "./login.user.model";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginMessage: string = null;
  loginSucess: boolean = false;
  myUsers: User[] = [];
  showAddCard: boolean = false;
  showACard: boolean = false;
  userAddError: boolean = false;
  newUser: User = new User(0, null, null);
  user: User = {
    id: 0,
    username: null,
    password: null
  };

 //login

  constructor(private userService: UserService, private routerService: Router) {}

  enableOrDisableCardshowAddCard(){
    console.log("button works")
    this.showAddCard = !this.showAddCard;
  }

  loginValidate() {
    this.userService
      .validateUser(this.user)
      .subscribe((returnedUser: User[]) => {
        if (returnedUser != null && returnedUser.length != 0) {
          this.loginMessage = "Logged in successfully!";
          this.user = returnedUser[0];
          this.loginSucess = true;
        } else {
          this.loginMessage = "Login Failed";
          this.loginSucess = false;
        }
      });
  }

  loginUser() {
       this.userService.validateUserForlogin(this.user).subscribe((users: User[]) => {
            console.log(users);
            if(users != null && users.length > 0) {
                sessionStorage.setItem("loggedIn", "true");
                sessionStorage.setItem("username",users[0].username);
              // localStorage.setItem("localTest","Testing the local storage");
                this.routerService.navigate(["/home"]);
                
            } else {
                this.loginMessage = "Login Failed";
                this.loginSucess = false;
            }
       })
    }

  
}
