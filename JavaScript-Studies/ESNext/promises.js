
function speakAfterOf(seconds, phrase){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

speakAfterOf(3, "That's cool!").then((phrase) => phrase.concat('?!?')).then(outherPhrase => console.log(outherPhrase)).catch(e => console.log(e))