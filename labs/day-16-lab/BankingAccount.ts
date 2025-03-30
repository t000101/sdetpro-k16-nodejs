export default abstract class BankingAccount{
    protected amount: number;

    constructor(amount: number){
        this.amount = amount;
    }

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;
    protected abstract getBalance(amount: number): number;
}