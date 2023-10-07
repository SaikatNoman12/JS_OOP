
// Prototype chain
/* Main Constructor Function ---> Constructor Object Prototype ---> Constructor Object Prototype  */
function BankAccount(accountName, balance = 0){
    this.accountName = accountName;
    this.balance = balance;
    this.accountId = Date.now();
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount; 
}

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

const Nomaan = new BankAccount('Nomaan', 3000);
Nomaan.deposit(5000);
console.log(Nomaan);