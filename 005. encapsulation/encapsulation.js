// Encapsulation
class BankAccount{
    accountId;
    accountName;
    #balance;
    
    constructor(accountName, balance = 0){
        this.accountId = Date.now();
        this.accountName = accountName;
        this.#balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

    // setter old version 
    setBalance(amount){
        if(isNaN(amount)){
            throw new Error("Your amount is invalid!");
        }
        this.#balance = amount;
    }

    // getter old version
    getBalance(){
        return this.#balance;
    }

    // setter new version
    set balance(amount){
        if(isNaN(amount)){
            throw new Error("Your amount is invalid!");
        }
        this.#balance = amount;
    }

    // getter new version
    get balance(){
        return this.#balance;
    }

}

class CurrentAccount extends BankAccount{
    
    transactionLimit = 50000;

    constructor(accountName, balance){
        super(accountName, balance);
    }

    #calculateBusinessLoan(amount){
        console.log("Calculate loan " + amount);
    }

    takeBusinessLoan(amount){
        this.#calculateBusinessLoan(amount);
    }
}

const Rakes = new CurrentAccount("Abdullah", 5000);
Rakes.takeBusinessLoan(5100);