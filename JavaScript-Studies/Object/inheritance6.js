function Class(name, videoID){
    this.name = name
    this.videoID = videoID
}

const class1 = new Class('Welcome', 123)
const class2 = new Class('Bye bye', 456)
console.log(class1, class2)

//simulating the new
function myNew(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = myNew(Class, 'Welcome', 123)
const class4 = myNew(Class, 'Bye bye', 456)
console.log(class3, class4)