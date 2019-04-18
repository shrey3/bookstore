import { Component } from "@angular/core";

@Component({
  selector: 'app-navigation',
  templateUrl: 'app.navigation.html',
  styleUrls: ['app.navigation.scss']
})

export class NavigationComponent {

  getWhoLoggedIn() {

    console.log(sessionStorage)
    let whoLoggedIn = sessionStorage.getItem("username");
    if (whoLoggedIn != null) {
      return whoLoggedIn
    } else {
      return null;
    }
  }
}