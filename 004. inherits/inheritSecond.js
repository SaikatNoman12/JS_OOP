// Bank Account
function BankAccount(accountName, balance = 0){
    this.accountName = accountName;
    this.balance = balance;
    this.accountId = Date.now();
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance += amount;
}

// Current Account
function CurrentAccount(accountName, balance = 0){
    // Inherit BankAccount property in CurrentAccount
    BankAccount.call(this, accountName, balance);
}

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('I want ' + amount + ' business loan.');
}

// Inherit BankAccount method in CurrentAccount
CurrentAccount.prototype = Object.create(BankAccount.prototype);

const Nomaan = new CurrentAccount('Abdullah', 3000);
Nomaan.deposit(10000);
console.log(Nomaan);