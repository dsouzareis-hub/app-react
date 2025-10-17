import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const { salvarCredenciais } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    setErro('');

    try {
      const resposta = await api.post('/login', { email, senha });
      const { token } = resposta.data;

      // Salva no contexto e no localStorage
      salvarCredenciais({ email, senha, token });
      localStorage.setItem('token', token);

      // Navega para o dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response?.data || error.message);
      setErro(error.response?.data?.message || 'Erro de conexão');
    }
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} /><br />
        <button type="submit">Entrar</button>
      </form>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
}
