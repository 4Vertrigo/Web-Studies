function crateProduct(name, price){
    return{
        name,
        price,
        descount: 0.1
    }
}

console.log(crateProduct('Notebook', 2199.49))
console.log(crateProduct('iPad', 2199.49))