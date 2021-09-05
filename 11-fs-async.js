const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (error, result) => {
    (error) ? console.log(error) : ''; 
    const firstFile = result
    //console.log(first);

    readFile('./content/second.txt', 'utf8', (error, result) => {
        (error) ? console.log(error) : ''; 
        const secondFile = result
        writeFile(
            './content/result-sync.txt',
            `Here is the result of both files : ${firstFile}  and ${secondFile}.`,
            (error, result) => {
                (error) ? console.log(error) : '';
                console.log(result)
            }
        )
    })
})