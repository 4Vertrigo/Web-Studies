Array.prototype.myForEach = function(callback){

    for(let i = 0; i < this.length; i++)
        callback(this[i], i, this)

}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.myForEach(function(name, index, vec){
    console.log(`${index + 1}) ${name} ${vec}`)
})