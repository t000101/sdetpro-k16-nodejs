const readline = require('readline-sync');

let firstAccountNumber = {
    accountNumber: 123456789,
    accountHolder: "John Doe",
    accountBalance: 1000,
}

let secondAccountNumber = {...firstAccountNumber, accountNumber: 987654321}

let arrayOfAccounts = [firstAccountNumber, secondAccountNumber]

printBankingApplication();

let option = Number(readline.question('Enter your option: '));

while (option !=0 ){
    switch (option) {
        case 1:
            findAccount(arrayOfAccounts);
            printBankingApplication()
            break;
        case 2:
            updateAccount(arrayOfAccounts);
            printBankingApplication()
            break;
        case 0:
            console.log('Exiting the program ...');
            break;
        default:
            console.log('Invalid option!');
            printBankingApplication()
            break;
    }
    option = Number(readline.question('Enter your option: '));
}

function printBankingApplication() {
    console.log(`=== Banking Application===
    1. Find an account
    2. Update balance
    0. Exit the program`);
}


function findAccount(arrayOfAccounts) {
    let accountNumber = Number(readline.question('Enter account number: '));
    let account = arrayOfAccounts.find(account => account.accountNumber === accountNumber);

    if (account) {
        const {accountHolder, accountBalance } = account;
        console.log(`Account holder: ${accountHolder}`);
        console.log(`Account balance: ${accountBalance}`);
    } else {
        console.log('Account not found!');
    }
    return account;
}

function updateAccount(arrayOfAccounts) {
    let account = findAccount(arrayOfAccounts);
    console.log(`=== Update Balance Option===
        1. Withdraw
        2. Deposit
        0. Exit the program`);

    
    let option = Number(readline.question('Enter your option: '));

    switch (option) {
        case 1:
            withdraw(account);
            break;
        case 2:
            deposit(account);
            break;
        case 0:
            console.log('Exiting the program ...');
            break;
        default:
            console.log('Invalid Update Balance Option!');
            break;
    }
}

function withdraw({accountBalance}) {
    let amount = Number(readline.question('Enter amount to withdraw: '));

    if (accountBalance < amount) {
        console.log('Insufficient balance!');
    } else {
        accountBalance -= amount;
        console.log(`Withdraw successful! Remaining balance: ${accountBalance}`);
    }
}

function deposit({accountBalance}) {
    let amount = Number(readline.question('Enter amount to deposit: '));

    accountBalance += amount;
    console.log(`Deposit successful! New balance: ${accountBalance}`);
}
