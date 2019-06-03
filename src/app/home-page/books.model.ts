export class Books {
    id: string;
    name: string;
    price: number;
    description: string;
    imageurl: string;


    constructor(myId: string, name: string, price:number, description: string, imageurl: string) {
        this.id = myId;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageurl = imageurl;
    }
}