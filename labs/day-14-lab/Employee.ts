export default abstract class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    public printEmployee(): void {
        console.log(`${this.name} has salary is ${this.salary}`);
    }
}