const anonymous = process.argv.indexOf('-a') !== -1
//console.log(anonymous)

if(anonymous)
{
    process.stdout.write('Hello anonymous!\n')
    process.exit()
}
else
{
    process.stdout.write('Insert your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`What's up ${name}!!\n`)
        process.exit()
    })
} 