const path = require('path')

// Nome do arquivo
console.log(path.basename(__filename));

// Diretório do arquivo
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Cria objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));