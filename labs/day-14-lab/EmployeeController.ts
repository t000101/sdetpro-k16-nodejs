import Employee from "./Employee";

export default class EmployeeController {

    public static printAllEmployee(employeeList: Employee[]): void {
        console.log(`=== List Employee ===`)
        console.log(employeeList);
    }

    public static printTotalSalary(employeeList: Employee[]): void {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        console.log(`Total salary is: ${totalSalary}`);
    }

    public static printHigestSalaryEmployee(employeeList: Employee[]): void {
        let highestSalary: number = employeeList[0].getSalary();
        let highestEmployeeName: string = employeeList[0].getName();
        for (const employee of employeeList) {
            if (employee.getSalary() > highestSalary) {
                highestSalary = employee.getSalary();
                highestEmployeeName = employee.getName();
            }
        }
        console.log(`${highestEmployeeName} is highest salary employee: ${highestSalary}`);
    }

    public static printLowestSalaryEmployee(employeeList: Employee[]): void {
        let lowestSalary: number = employeeList[0].getSalary();
        let lowestEmployeeName: string = employeeList[0].getName();
        for (const employee of employeeList) {
            if (employee.getSalary() < lowestSalary) {
                lowestSalary = employee.getSalary();
                lowestEmployeeName = employee.getName();
            }
        }
        console.log(`${lowestEmployeeName} is lowest salary employee: ${lowestSalary}`);
    }

    public static sortEmployeeByName(employeeList: Employee[]): void {
        console.log(`=== List Employee sort by Name ===`)
        employeeList.sort((a, b) => {
            const nameAEmployee = a.getName().toUpperCase();
            const nameBEmployee = b.getName().toUpperCase();
            if(nameAEmployee < nameBEmployee) {
                return -1;
            }

            if(nameAEmployee > nameBEmployee) {
                return 1;
            }

            return 0;
        });
        console.log(employeeList);
    }

    public static sortEmployeeBySalary(employeeList: Employee[]): void {
        console.log(`=== List Employee sort by Salary ===`)
        employeeList.sort((a, b) => a.getSalary() - b.getSalary());
        console.log(employeeList);
    }
}