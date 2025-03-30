import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    deposit(amount: number): void {
        if (amount > 0) {
            this.amount += amount;
            console.log(`Deposited ${amount} into Savings Account. New Balance: ${this.amount}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.amount) {
            this.amount -= amount;
            console.log(`Withdrawn ${amount} from Savings Account. New Balance: ${this.amount}`);
        }
        else {
            throw new Error("Invalid withdrawal amount;");
        }            
    }

    getBalance(): number {
        return this.amount;
    }
}