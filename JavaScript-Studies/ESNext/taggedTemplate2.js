function real(parts, ...values) {
    const result = []
    values.forEach((value, index) => { 
        value = isNaN(value) ? value : `R${value.toFixed(2)}`
        result.push(parts[index], value)
    })

    return result.join('')
}

const price = 29.99
const installmentPrice = 2.99
console.log(real `1x ${price} or 10x ${installmentPrice}.`)