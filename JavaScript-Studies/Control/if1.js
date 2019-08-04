function goodNews(grade){

    if(grade >= 7)
    {
        console.log('Approved with ' + grade)
    }
}

goodNews(8.1)
goodNews(6.1)

function ifItIsTrueIWillTellYou(value){

    if(value)
    {
        console.log("It's true ... " + value)
    }
}

ifItIsTrueIWillTellYou()
ifItIsTrueIWillTellYou(null)
ifItIsTrueIWillTellYou(undefined)
ifItIsTrueIWillTellYou(NaN)
ifItIsTrueIWillTellYou('')
ifItIsTrueIWillTellYou(0)
ifItIsTrueIWillTellYou(-1)
ifItIsTrueIWillTellYou(' ')
ifItIsTrueIWillTellYou('?')
ifItIsTrueIWillTellYou([])
ifItIsTrueIWillTellYou([1, 2])
ifItIsTrueIWillTellYou({})