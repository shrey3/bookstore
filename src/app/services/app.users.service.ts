import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../login/login.user.model"

const JSON_SERVICE = "http://localhost:3000"

@Injectable()
export class UserService{

    constructor(private http: HttpClient)
    { 
    
    }

    validateUser(user: User): Observable<User[]> {
        let parameter = "username=" + user.username + "&password=" + user.password
        return this.http.get<User[]>(JSON_SERVICE + "/users?" + parameter);
    }

    getUsers() : Observable<User[]>{
        //return users from service
       return this.http.get<User[]>(JSON_SERVICE + "/users");
    }

    addNewUser(user : User): Observable<User> {
        return this.http.post<User>(JSON_SERVICE + "/users", user);
    }

    validateUserForlogin(user: User): Observable<User[]> {
        let parameter = "username=" + user.username + "&password=" + user.password
        let returnedUser: User[] = [];
        return this.http.get<User[]>(JSON_SERVICE + "/users?" + parameter);
    }

}