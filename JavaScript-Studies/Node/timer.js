const schedule = require('node-schedule')

const assignment1 = schedule.scheduleJob('*/5 * 17 * * 4', function(){
    console.log('Executing the assignment 1!', new Date().getSeconds())
})

setTimeout(function(){
    assignment1.cancel()
    console.log('Canceling the assignment 1!')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 17
rule.second = 30

const assignment2 = schedule.scheduleJob(rule, function(){
    console.log('Executing the assignment 2!', new Date().getSeconds())
})