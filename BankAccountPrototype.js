class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
    this.balance += amount;
    console.log("Deposited amount " + amount + " and Total Balance is " + this.balance);
    }
    withdraw(amount){
    this.balance -= amount;
    console.log("Withdraw amount " + amount + " and Total balance is " + this.balance);
    }
}
BankAccount.prototype.SavingsAccount = function(interest){
    return(this.interest = interest);
}
BankAccount.prototype.CurrentAccount = function(withdrawLimit){
    return(this.withdrawLimit = withdrawLimit);
}

let AccountDetails = new BankAccount(123,100000000);
AccountDetails.deposit(30000);
AccountDetails.withdraw(20000);
console.log("Interest is "+AccountDetails.SavingsAccount(3400));
console.log("Withdraw limit is "+AccountDetails.CurrentAccount(987000));

