const cart = [
    '{"name": "Erase", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil\'s kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}',
]

const toObject = json => JSON.parse(json)
const justPrice = obj => obj.price

let result = cart.map(toObject).map(justPrice)
console.log(result)