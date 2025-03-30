import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingsAccount";


const savings: SavingsAccount = new SavingsAccount(500);
savings.deposit(200);
savings.withdraw(300);
console.log("Savings Account Balance:", savings.getBalance());

const checking = new CheckingAccount(500);
checking.deposit(100);
checking.withdraw(500); 
checking.withdraw(70);
console.log("Checking Account Balance:", checking.getBalance());
