let value //not initialized
console.log(value)

value = null //lack of value
console.log(value)

const product
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined //avoid assign undefined
console.log(!!product.price)
// delete product.price
console.log(product)

product.price = null //without price
console.log(!!product.price)
console.log(product)