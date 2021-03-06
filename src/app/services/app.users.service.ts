import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../login/login.user.model"

const JSON_SERVICE = "http://localhost:3000"
const db_URL = "http://localhost:8080"
const url = "http://localhost:8080/user/getByName/"

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }
    getUsers(): Observable<User[]> {
        //return users from service
        return this.http.get<User[]>(db_URL + "/user/allusers");
    }

    addNewUser(user: User): Observable<User> {
        user.id = user.username + 'id';
        return this.http.post<User>(db_URL + "/user/adduser", user);
    }

    validateUserForlogin(user: User): Observable<User> {
        let parameter = user.username
        console.log(url + parameter);
        return this.http.get<User>(url + parameter);
    }

}