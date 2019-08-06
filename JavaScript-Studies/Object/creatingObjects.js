//Using the literal notation

const obj1 = {}
console.log(obj1)

//Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Construction functions
function Product(name, price, discount){
    this.name = name
    this.getPriceWithDiscount = () =>{
        return price * (1 - discount)
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

//Factory Function
function createEmployee(name, baseSalary, absences){
    return{
        name,
        baseSalary,
        absences,
        getSalary(){
            return(baseSalary / 30) * (30 - absences)
        }
    }
}

const f1 = createEmployee('John', 7980, 4)
const f2 = createEmployee('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

//Object.create
const daughter = Object.create(null)
daughter.name = "Kai'sa"
console.log(daughter)

//A famous function that returns an object
const fromJSON = JSON.parse('{"info": "Im a JSON"}')
console.log(fromJSON.info)