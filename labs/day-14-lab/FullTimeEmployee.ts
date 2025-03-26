import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {
    
    constructor(name: string) {
        super(name, Math.floor(Math.random() * 50000));
    }

}