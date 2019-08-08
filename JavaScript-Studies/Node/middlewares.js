//middleware pattern (chain of responsibility)

const firstStep = (context, next) => {
    context.value1 = 'mid1'
    next()
}

const secondStep = (context, next) => {
    context.value2 = 'mid2'
    next()
}

const thirdStep = (context, next) => context.value3 = 'mid3'

const exec = (context, ...middleweres) => {
    const execStep = index => {
        middleweres && index < middleweres.length &&
            middleweres[index](context, () => execStep(index + 1))
    }

    execStep(0)
}

const context = {}
exec(context, firstStep, secondStep, thirdStep)
console.log(context)