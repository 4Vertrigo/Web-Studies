function Person() {

    this.age = 0

    const self = this
    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000)
}

new Person