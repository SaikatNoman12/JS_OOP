
// Bank Account Type
function BankAccount(accountName, balance = 0){
    this.accountName = accountName;
    this.accountId = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount; 
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

const Nomaan = new BankAccount('Abdullah Al Nomaan', 4000);
Nomaan.deposit(500);
console.log(Nomaan);

// Current Account Type
function CurrentAccount(accountName, balance = 0){
    this.accountName = accountName;
    this.accountId = Date.now();
    this.balance = balance;
}

CurrentAccount.prototype.deposit = function(amount){
    this.balance += amount; 
}

CurrentAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log("I want " + amount + " business loan.");
}
const Nadia = new CurrentAccount('Nadia Sultana Noman', 8000);
Nadia.deposit(500);
console.log(Nadia);

// Saving Account
function SavingAccount(accountName, balance = 0){
    this.accountName = accountName;
    this.accountId = Date.now();
    this.balance = balance;
}

SavingAccount.prototype.deposit = function(amount){
    this.balance += amount; 
}

SavingAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

SavingAccount.prototype.takeFamilyLoan = function(amount){
    console.log("I want " + amount + " family loan.");
}
const SaveNadia = new SavingAccount('Nadia Sultana Noman', 10000);
SaveNadia.deposit(500);
SaveNadia.takeFamilyLoan(50000)
console.log(SaveNadia);

