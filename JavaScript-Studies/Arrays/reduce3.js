Array.prototype.myReduce = function(callback, initialValue){

    let count = (initialValue !== undefined) ? initialValue : this[0]

    for(let i = (initialValue !== undefined) ? 0 : 1; i < this.length; i++)
        count = callback(count, this[i], i, this)

    return count
}

const students = [
    {name: 'John', grade: 7.3, holder: false},
    {name: 'Mary', grade: 9.2, holder: true},
    {name: 'Peter', grade: 9.8, holder: false},
    {name: 'Ana', grade: 8.7, holder: true}
]

const grades = function(count, current){
    return count + current
}

const result = students.map(a => a.grade).myReduce(grades, 10)

console.log(result)