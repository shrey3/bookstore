import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LogoutComponent implements OnInit {

    constructor(private routerService: Router) {

    }
    ngOnInit() {
        sessionStorage.setItem("username", null);
        sessionStorage.setItem("loggedIn", "false");
        this.routerService.navigate([""]);
    }

}