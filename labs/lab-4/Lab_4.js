/*
Creating 1 object representing Bank Count Number with below structure:

{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

. Write a consolse interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
*/

const readline = require('readline-sync');

let firstAccountNumber = {
    accountNumber: 123456789,
    accountHolder: "John Doe",
    accountBalance: 1000,
}

let secondAccountNumber = { ...firstAccountNumber, accountNumber: 987654321 };

let arrayOfAccounts = [firstAccountNumber, secondAccountNumber];

let optionBankApp = printAndStoreBankingApplication();

while (optionBankApp !== 0) {
    switch (optionBankApp) {
        case 1:
            findAccount(arrayOfAccounts);
            optionBankApp = printAndStoreBankingApplication();
            break;
        case 2:
            updateAccount(arrayOfAccounts);
            optionBankApp = printAndStoreBankingApplication();
            break;
        default:
            console.log('Invalid option! Please reselect: ');
            optionBankApp = printAndStoreBankingApplication();
    }
}

console.log('Exiting the program ...');

/**
 * Prints the banking application menu and returns the user's selected option.
 * @returns {number} The user's selected option.
 */
function printAndStoreBankingApplication() {
    console.log(`=== Banking Application===
    1. Find an account
    2. Update balance
    0. Exit the program`);
    return Number(readline.question('Enter your option: '));
}

function printAndStoreUpdateBalanceOption(){
    console.log(`=== Update Balance Option ===
        1. Withdraw
        2. Deposit
        0. No! And back to Bank Application menu`);
        return Number(readline.question('Enter your option: '));
}


function findAccount(arrayOfAccounts) {
    let accountNumber = Number(readline.question('Enter account number: '));
    let account = arrayOfAccounts.find(account => account.accountNumber === accountNumber);

    if (account) {
        const { accountHolder, accountBalance } = account;
        console.log(`Account holder: ${accountHolder}`);
        console.log(`Account balance: ${accountBalance}`);
    } else {
        console.log('Account not found!');
    }
    return account;
}

function updateAccount(arrayOfAccounts) {
    let continueUpdate = true;
    let account = findAccount(arrayOfAccounts);
    let option =  printAndStoreUpdateBalanceOption();
    while (continueUpdate) {
        if (account) {         
            switch (option) {
                case 1:
                    withdraw(account);
                    option = printAndStoreUpdateBalanceOption()
                    break;
                case 2:
                    deposit(account);
                    option = printAndStoreUpdateBalanceOption()
                    break;
                case 0:
                    console.log('Exiting the program ...');
                    continueUpdate = false;
                    break;
                default:
                    console.log('Invalid Update Balance Option!');
                    continueUpdate = false;
                    break;
            }
        } else {
            console.log(`=== Do you want to continue update balance? ===
                1. Yes
                0. No! And back to Bank Application menu`);
            let option = Number(readline.question('Enter your option: '));
            if (option == 0) {
                continueUpdate = false;
            }
        }

    }
}

function withdraw(account) {
    let amount = Number(readline.question('Enter amount to withdraw: '));

    if (account.accountBalance < amount) {
        console.log('Insufficient balance!');
    } else {
        account.accountBalance -= amount;
        console.log(`Withdraw successful! Remaining balance: ${account.accountBalance}`);
    }
}

function deposit(account) {
    let amount = Number(readline.question('Enter amount to deposit: '));

    account.accountBalance += amount;
    console.log(`Deposit successful! New balance: ${account.accountBalance}`);
}
