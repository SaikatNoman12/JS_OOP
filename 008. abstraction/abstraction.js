class Employee{
    id;
    name;
    age;
    salary;
    #bonous;

    constructor(name, age, salary){
        this.id = Date.now();
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.#bonous = 5000; 
    }

    #finalSalary (){
        console.log("Final Salary is " + (salary + this.#bonous));
    }


    get finalSalary(){
        this.#finalSalary();
    }

}

const Reeks = new Employee('Reeks', 20, 40000);
console.log(Reeks);