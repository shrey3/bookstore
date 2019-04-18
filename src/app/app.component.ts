import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookStore';

  checkIfLoggedIn() {
    let loggedInValidation = sessionStorage.getItem("loggedIn");
    //console.log(loggedInValidation("loggedIn"))
    if (loggedInValidation === "true") {
      return true;
    } else {
      return false;
    }
  }
}

