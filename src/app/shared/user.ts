export class Admin {
    _id: string;
    name: string;
    email: string;
    password: string;
    admintype: string;
}

export class Product{
    _id: string;
    name: string;
    category: string;
    price: Number;
    quantity: Number;
    seller_id: Number;
}

export class Customer{
    _id: string;
    name: string;
    email: string;
    password: string;
}