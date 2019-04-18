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
  newUser: User = new User(null, null, null);
  user: User = {
    id: null,
    username: null,
    password: null
  };

  constructor(private userService: UserService, private routerService: Router) { }

  enableOrDisableCardshowAddCard() {
    console.log("button works")
    this.showAddCard = !this.showAddCard;
  }

  loginUser() {
    this.userService.validateUserForlogin(this.user).subscribe((users: User) => {
      console.log(users);

      if (users != null) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", users["username"]);
        console.log(sessionStorage)
        //localStorage.setItem("localTest","Testing the local storage");
        this.routerService.navigate(["/home"]);

      } else {

        this.loginMessage = "Login Failed";
        this.loginSucess = false;
      }
    })
  }


}
