// Parent Constructor
class BankAccount{
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
        this.balance -= amount;
    }
}

// Child Constructor and Inherit BankAccount in CurrentAccount  
class CurrentAccount extends BankAccount{
    constructor(accountName, balance = 0){
        super(accountName, balance);
    }

    takeBusinessLoan(amount){
        console.log("I need " + amount + " business loan.");
    }
}
const nomaan = new CurrentAccount('Abdullah', 4000);
console.log(nomaan);