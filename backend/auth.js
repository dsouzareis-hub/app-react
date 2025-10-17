// backend/auth.js
const express = require('express');
const router = express.Router();

const usuarios = [
  { id: 1, email: 'daniel@senai.com', senha: 'senai', nome: 'Daniel Souza' }
];

// Simula verificação de token
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer token123

  if (!token) return res.status(401).json({ message: 'Token ausente' });

  if (token !== 'fake-jwt-token') {
    return res.status(403).json({ message: 'Token inválido' });
  }

  next();
}

// Login normal
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ message: 'Email ou senha incorretos' });
  }

  // Retorna token fake
  res.status(200).json({
    message: 'Login autorizado',
    token: 'fake-jwt-token'
  });
});

// Rota /me — retorna dados do usuário autenticado
router.get('/me', autenticarToken, (req, res) => {
  const usuario = usuarios[0]; // fixo, já que token é fake
  res.json({
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
  });
});

module.exports = router;
