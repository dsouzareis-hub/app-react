import React, { useState } from 'react';
import '../styles/loginStyle.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Usuário: ${username}\nSenha: ${password}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu usuário"
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required
        />

        <button type="submit">Entrar</button>
        <div className='containerRodapeLogin'>
          <a href="cadastro.jsx">Não tenho cadastro</a><br />
          <a href="recuperacao.jsx">Esqueci minha senha</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
