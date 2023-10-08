// UTILITY Class "static" Keyword. Use for Multiple Works.
class User{
    static id = 1;

    // Instance
    name;
    age;
    income

    constructor(name, age, income){
        // Use static property
        this.id = User.id++;

        this.name = name;
        this.age = age;
        this.income = income
    }

    // Sort by age use static method.
    static compareByAge(user1, user2){
        return user1?.age - user2?.age;
    }
    
    // Sort by income use static method.
    static compareByIncome(user1, user2){
        return user1?.income - user2?.income;
    }
} 

const user1 = new User('Abdullah', 40, 5000); // Instance
const user2 = new User('Nadia', 20, 4000); // Instance
const user3 = new User('Fahim', 30, 10000); // Instance

// users array
const users = [user1, user2, user3];

// Array sort ar by age.
users.sort(User.compareByAge);
/* 
console.log(users);
*/ 


// CONFIGURATION Class "static" Keyword. Use for Fixed Data.
class Utility{
    static dbUserName = 'UserName';
    static dbPassword = 'secret';
    static apiToken = 'abcd1234';
}
/* 
console.log(Utility.dbUserName);
console.log(Utility.dbPassword);
console.log(Utility.apiToken);
*/



// How to "static" Keyword Use "static" Property and Methods. And "static" Block
class StaticPropertyMethod{
    static obj = {
        1:"Value 1"
    };

    static{
        console.log('Initialized');
    }

    static getCash(){
        console.log(this.obj);
    }
}
StaticPropertyMethod.getCash();
StaticPropertyMethod.getCash();



// How to Change "static" Property and Methods Value Changes. and "static" Method in store in property; 
class ChangeStatic{
    static id = this.storeId();

    static storeId(){
        return 1;
    }
} 

console.log(ChangeStatic.id);

// Change "static" Id Value 
ChangeStatic.id = 20;
console.log(ChangeStatic.id);







