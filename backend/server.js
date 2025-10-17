// backend/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth');

const app = express();

// 🔹 Middleware para interpretar JSON
app.use(express.json());

// 🔹 Configuração CORS liberando apenas o front na porta 3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 🔹 Rota de autenticação
app.use('/api', authRoutes);

// 🔹 Servidor rodando
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT} 🚀`));
