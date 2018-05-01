export class Person{
    firstName:string;
    lastName:string;

    constructor(firstName:string="default",lastName:string="default"){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string{
        return "Hi, this is "+this.firstName+" "+this.lastName+".";
    }
}