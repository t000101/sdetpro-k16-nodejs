import Employee from "./Employee";

export default class ContractEmployee extends Employee{

    constructor(name: string) {
        super(name, Math.floor(Math.random() * 40000));
    }

}