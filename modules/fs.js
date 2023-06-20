const fs = require('fs')
const path = require('path')


// Criar pasta
fs.mkdir(path.join(__dirname, '/fs-test'), (error) => {
    if (error) {
        return console.log('Erro: ' + error);
    }

    console.log('Pasta criada com sucesso!');
})


// Criar arquivo
fs.writeFile(path.join(__dirname, '/fs-test', 'test.txt'), 'Hello node!', (error) => {
    if (error) {
        return console.log('Erro: ' + error);
    }

    console.log('Arquivo criado com sucesso!');

    // Adicionar á um arquivo
    fs.appendFile(path.join(__dirname, '/fs-test', 'test.txt'), 'Hi world!', (error) => {
        if (error) {
            return console.log('Erro: ' + error);
        }

        console.log('Adicionado ao arquivo com sucesso!');
    })

    // Ler um arquivo
    fs.readFile(path.join(__dirname, '/fs-test', 'test.txt'), 'utf8', (error, data) => {
        if (error) {
            return console.log('Erro: ' + error);
        }

        console.log(data);
    })
})