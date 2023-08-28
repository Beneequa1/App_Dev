function greeter(g:string){
    console.log(`Welcome to Typerscript ${g}`)
}

let n='Beneequa Santiago'
greeter(n)

// implicit numerical data
let y = -10
y = 6

//explicit boolean data type
let isCorrect:boolean
isCorrect =true

//explicit date in an array
let colors:string [] = ['red','yellow','blue']
let nums:Array<number>=[1,5,-3,4,10]

//combine data type
let dtype:[number,string,boolean]= [3,'Martha',false]

//never data type
//let x:never =23

//DATA TYPE FOR CLASSES
let m:string = 'Peter'
let mLen =m.length 
console.log(`${m} has ${mLen} letters.`)

//casting is an implicit data type
let firstName = 'Martha'
let lenFirstName= firstName.length
console.log(`${firstName} had ${lenFirstName} letters.`)

//FUNCTION IN TYPESCRIPT
//return value type
function getHour():number{
    return new Date().getHours()
}

console.log('It is ' + getHour())

function gretting():void{
    console.log('Welcome to Angular dat type')
}

function getSum(num1:number,num2:number,name:string):string{
    name = name + '! The sum is' + (num1+num2)
    return name 
}

console.log(getSum(6,10,'Matha'))

//Three dots notation
function getAverage(...n:number[]):number{
    let total = 0
    let count = 0
    let avg = 0
for (let i=0;  i<n.length;i++){
    total += n[i]
    count ++
}
    avg =total/count
    return avg
}

//CLASSES IN TS
class Car{
    brand:string;
    model:string;
    yearManufacture: number;

    constructor(brand:string,model:string,yearManufracture:number){
        this.brand = brand
        this.model = model
        this.yearManufacture=yearManufracture
    }
    year(){
        console.log(this.yearManufacture)
    }
}

//assign value to each class properties
let car1 = new Car('Telsa', 'S',2022)

//INHERITANCE TS
//define Classes
class Person{
    private name:string = 'Peter Pan'
    save(){
        console.log('Registration successful!' + this.name)
    }
}
class Customer extends Person{
    sale(){
        console.log('x items sold')
    }
}
class Employee extends Customer{
    salary(){
        console.log('Salary paid!')
    }
}
//regular class
let persona1 = new Person
let customer1 = new Customer
persona1.save()
customer1.sale()
//inheretance class
let employee1 = new Employee
employee1.sale()
employee1.save()

