import Employee from "./Employee";
import ContractEmployee from "./ContractEmployee";
import FullTimeEmployee from "./FullTimeEmployee";
import EmployeeController from "./EmployeeController";

const employee: Employee[] = [
    new FullTimeEmployee("Mavis"),
    new ContractEmployee("John"),
    new FullTimeEmployee("Davis"),
    new FullTimeEmployee("Mathew"),
    new ContractEmployee("Selena")
];

/* 0. Print all employees */
EmployeeController.printAllEmployee(employee);

/* 1. Calculate total salary */
EmployeeController.printTotalSalary(employee);

/* 2. Print highest salary employee */
EmployeeController.printHigestSalaryEmployee(employee);

/* 3. Print highest salary employee */
EmployeeController.printLowestSalaryEmployee(employee);

/* 4. Sort employee by salary*/
EmployeeController.sortEmployeeBySalary(employee);

/* 5. Sort employee by name*/
EmployeeController.sortEmployeeByName(employee);

