const cars = ['Mercedes', 'Audi', 'BMW']

function print(name, i){
    console.log(`${i + 1}. ${name}`)
}

cars.forEach(print)
cars.forEach(car => console.log(car))
cars.forEach((car, x, y, z) => console.log(`${car}/ ${x}/ ${y}/ ${z}`))