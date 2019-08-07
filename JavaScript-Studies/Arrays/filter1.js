const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'glass', price: 12.49, fragile: true},
    {name: 'plastic cup', price: 18.99, fragile: false}
]

console.log(products.filter(function(p){
    return p.fragile == true
}).filter(function(p){
    return p.price > 500
}))

const expensive = product => product.price >= 500
const fragile = product => product.fragile == true

console.log(products.filter(expensive).filter(fragile))