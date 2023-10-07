
// const  BankAccount = class{}
class BankAccount {
    accountId;
    accountName;
    balance;


    constructor(accountName, balance = 0){
        this.accountId = Date.now();
        this.accountName = accountName;
        this.balance = balance; 
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -=amount;
    }

}

const Nomaan = new BankAccount('Nomaan', 4000);
Nomaan.deposit(5000);
console.log(Nomaan);