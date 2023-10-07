// For create bank account, deposit money and withdraw money. 
function BankAccount(accountName, balance = 0) {
    this.accountName = accountName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = function(amount){
        this.balance -= amount;
    }
}

// Accounts db.
const accounts = [];

// Create account:
const form = document.getElementById("newAccount");
const accountName = document.getElementById("accountName");
const initialBalance = document.getElementById("initialBalance");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const accountNameId = accountName.value.trim();
    const initialBalanceAmount = initialBalance.value.trim();

    if(initialBalanceAmount !== '' && accountNameId !== '' ){
        const newAccount = new BankAccount(accountNameId, Number(initialBalanceAmount));
        accounts.push(newAccount);
        console.log(accounts);
    }
    else{
        alert("Please Enter Your All Documents");
    }
});

// Deposit amount.
const depositForm = document.getElementById("depositAmount"); 
const depositId = document.getElementById("depositId");
const depositBalance = document.getElementById("depositBalance");
depositForm.addEventListener('submit' , (event) => {
    event.preventDefault();
    if(accounts.length){
        if(depositId.value.trim() !== '' && depositBalance.value.trim() !== ''){
            const user = accounts.find(item => item.accountNumber === +depositId.value.trim());
            user.deposit(+depositBalance.value.trim());
            console.log(accounts);
        }
        else{
            alert("Please Enter Your All Documents"); 
        }
    }
    else{
        alert("Please Create new Account"); 
    }
});

// Withdraw amount
const withdrawForm = document.getElementById("withdrawAmount"); 
const withdrawId = document.getElementById("withdrawId");
const withdrawBalance = document.getElementById("withdrawBalance");

withdrawForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(accounts.length){
        if(withdrawId.value.trim() !== '' && withdrawBalance.value.trim() !== ''){
            const user = accounts.find(item => item.accountNumber === +withdrawId.value);
            user.withdraw(+withdrawBalance.value);
            console.log(accounts);
        }
        else{
            alert("Please Enter Your All Documents"); 
        }
    }
    else{
        alert("Please Create Account"); 
    }
});