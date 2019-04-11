import { CanActivate, Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private routerService : Router,
        private activateRouter : ActivatedRoute) {

    }
    canActivate() {
        let userloggedin: boolean = (sessionStorage.getItem("loggedIn") === "true");
        console.log(this.activateRouter.snapshot);
        console.log(this.routerService.url)
        if(!userloggedin) {
            this.routerService.navigate(['/login']);
            return false;
        } 
        return userloggedin;        
    }
}