import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    private minimumBalance: number = 50;

    deposit(amount: number): void {
        if (amount > 0) {
            this.amount += amount;
            console.log(`Deposited ${amount} into Checking Account ${this.accountNumber}. New Balance: ${this.amount}`);
        }
        else {
            throw new Error("Deposit amount must be positviepositvie;");
        }

    }

    withdraw(amount: number): void {
        if (amount > 0 && ((this.amount - amount) >= this.minimumBalance)) {
            this.amount -= amount;
            console.log(`Withdrawn ${amount} from Checking Account ${this.accountNumber}. New Balance: ${this.amount}`);
        }
        else {
            console.log("Invalid withdrawal amount or balance would go below minimum required.");
        }
    }

    getBalance(): number {
        return this.amount;
    }

}