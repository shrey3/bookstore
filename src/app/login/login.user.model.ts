export class User {
    id : string;
    username: string;
    password: string;

    constructor(myId : string, name: string, password: string) {
        this.id = myId;
        this.username = name;
        this.password = password;
    }
}