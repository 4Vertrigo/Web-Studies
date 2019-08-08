const countA = require('./singleInstance')
const countB = require('./singleInstance')

const countC = require('./newInstance')()
const countD = require('./newInstance')()

countA.inc()
countA.inc()
console.log(countA.value, countB.value)

countC.inc()
countC.inc()
console.log(countC.value, countD.value)