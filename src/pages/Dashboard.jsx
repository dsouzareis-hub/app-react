import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { limparCredenciais } = useAuth();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const resposta = await api.get('/me');
        setUsuario(resposta.data);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    }
    carregarUsuario();
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    limparCredenciais();
    navigate('/');
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Bem-vindo ao Dashboard!</h2>
      {usuario ? (
        <>
          <p>Usuário autenticado: <strong>{usuario.nome}</strong></p>
          <p>Email: {usuario.email}</p>
        </>
      ) : (
        <p>Carregando dados...</p>
      )}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
