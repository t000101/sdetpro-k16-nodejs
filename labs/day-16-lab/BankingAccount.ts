export default abstract class BankingAccount{
    protected amount: number;
    protected accountNumber: string;

    constructor(accountNumber: string, amount: number){
        this.amount = amount;
        this.accountNumber = accountNumber;
    }

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;
    protected abstract getBalance(amount: number): number;
}