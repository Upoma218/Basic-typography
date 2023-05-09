class BankAccount{
    public id: number;
    public name: string;
    private _balance: number  //to secure the balance property , we can use private convention

    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this._balance = balance
    }

private getTestBalance(): number{
    return this._balance
}

get Test():number{
    return this.getTestBalance()
}

// getter

get balance(): number{
    return this._balance
}

    // getBalance(): number{
    //     return this._balance
    // }

// setter

set deposit(amount: number){
    this._balance = this._balance + amount
}

    // addDeposit(amount: number){
    //     this._balance = this._balance + amount
    // }
}

// class StudentAccount extends BankAccount{
//     test(){
//         this.
//     }
// }

const myAccount = new BankAccount (444, 'Upoma', 5000);
console.log(myAccount)

myAccount.deposit = 3000;
// myAccount.addDeposit(20);
// myAccount.getBalance()

console.log(myAccount.balance)