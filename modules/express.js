const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();
app.use(express.json());

// Configurando Ejs
app.set('view engine', 'ejs');
app.set('view', 'src/views');

// Acessando
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render('index', { users });
});


// 
// Middlewares
// 
app.use((req, res, next) => {
    console.log(`Request Type: ${ req.method }`);
    console.log(`Content Type: ${ req.headers["content-type"] }`);
    console.log(`Date: ${ new Date() }`);
    next();
})


// Retornar html na página
app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello World!</h1>')
});


// Buscar todos
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// Buscar pelo id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// Inserir usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Atualizar usuário
// patch = atualizar parcialmente
// put = atualizar por completo
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// Deletar usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


const port = 8080;

app.listen(port, () => console.log('Rodando com express na porta: '+ port))