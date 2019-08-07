Array.prototype.myFilter = function(callback){

    const newArray = []

    for(let i = 0; i < this.length; i++)
        if(callback(this[i]))
            newArray.push(this[i])

    return newArray
}

const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'glass', price: 12.49, fragile: true},
    {name: 'plastic cup', price: 18.99, fragile: false}
]

const expensive = product => product.price >= 500
const fragile = product => product.fragile == true

console.log(products.filter(expensive).filter(fragile))