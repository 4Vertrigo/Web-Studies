let compareWithThis = function(parameter){
    console.log(this == parameter)
}

compareWithThis(global)
compareWithThis(this)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global)
compareWithThis(obj)

let compareWithThisArrow = parameter => console.log(this == parameter)
compareWithThisArrow(global)
compareWithThisArrow(module.exports) //this == this

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports)