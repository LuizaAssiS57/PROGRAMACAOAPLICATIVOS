/* 
CRIE UMA API COM DOIS ENDPOINTS:
/ clientes
/ funcionários

Ambos devem ter os métodos GET, POST.
*/

// IMPORTAÇÕES NECESSÁRIAS
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes} = require('sequelize');


// 1. CONFIGURANDO CONEXÃO COM OBANCO DE DADOS
const sequelize = new Sequelize('db_inova', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO O MODELO DE DADOS
//COMO DEVE SER A TABELA NO BANCO DE DADOS
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// 3. CONFIGURAÇÃO DO SERVIDOR EXPRESS
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// 4. ROTAS (ENDPOINT) DA API
// ROTA GET - LISTAR TODOS OS CLIENTES/ FUNCIONÁRIOS
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes'});
    }
});
app.get('/funcionarios', async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionarios'});
    }
});

// ROTA POST - CRIARUM NOVO CLIENTE/ FUNCIONÁRIO
app.post('/clientes', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome,email, telefone});
        res.status(201).json(novoCliente);
    } catch (error){
        res.status(500).json({ error: 'Erro ao criar cliente'});
    }
});
app.post('/funcionarios', async (req, res) => {
    const { nome, email, telefone, cargo, setor } = req.body;
    try {
        const novoFuncionario = await Funcionario.create({ nome, email, telefone, cargo, setor });
        res.status(201).json(novoFuncionario);
    } catch (error){
        res.status(500).json({ error: 'Erro ao criar funcionário'});
    }
});

// 5. INICIANDO O SERVIDOR E SINCRONIZANDO COM O BANCO DE DADOS
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log(`Banco de dados sincronizado com sucesso!`);
    });
}).catch(error => {
    console.error(`Erro ao conectar com o banco de dados:`, error);
});