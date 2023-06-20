const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USR}:${process.env.MONGODB_PWD}@cursonodejs.xttofg0.mongodb.net/`);
        console.log('Conectado com sucesso!');
    } catch (error) {
        console.log(`Erro ao conectar com o banco de dados: ${error}`);
    }
};


module.exports = connectToDatabase;