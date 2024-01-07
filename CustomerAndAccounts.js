class customers{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return (this.firstName + this.lastName);
    }

}

class accounts{
    constructur(customer, balance){
        this.customer = customer;
        this.balance = balance;
    }
    customerBalance(){
        return (this.customer + this.balance);
    }
}

let customerName = new customers("Sruthi","Pasumarthi");
let account1 = new accounts(customerName,20000);
let account2 = new accounts(customerName,500);

console.log(customerName.fullName());
console.log(account1.customerBalance());
console.log(account2.customerBalance());