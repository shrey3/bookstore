export class User {
    id : number;
    username: string;
    password: string;

    constructor(myId : number, name: string, password: string) {
        this.id = myId;
        this.username = name;
        this.password = password;
    }
}