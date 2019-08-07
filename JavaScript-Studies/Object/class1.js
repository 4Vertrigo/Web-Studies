class Release{
    
    constructor(name = 'Anonymous', value = 0){
        this.name = name
        this.value = value
    }
}

class FinancialCycle{

    constructor(mounth, year){
        this. mounth = mounth
        this.year = year
        this.releases = []
    }

    addReleases(...releases){
        releases.forEach(l => this.releases.push(l))
    }

    sumary(){
        let consolidatedValue = 0
        this.releases.forEach(l => consolidatedValue += l.value)

        return consolidatedValue
    }
}

const salary = new Release('Salary', 45000)
const electricityBill = new Release('Electricity', -220)

const bills = new FinancialCycle(6, 2018)
bills.addReleases(salary, electricityBill)
console.log(bills.sumary())