import React, { useState, useEffect } from 'react';
import '../styles/loginStyle.css';
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState([]);
  const [form, setForm] = useState({ email: '', password: '' });
  const [loginMessage, setLoginMessage] = useState('');

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('username')) || [];
    setUsername(dadosSalvos);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = username.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (usuarioEncontrado) {
      setLoginMessage(`Bem-vindo, ${usuarioEncontrado.nome}!`);
    } else {
      setLoginMessage('Email ou senha incorretos.');
    }

    setForm({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="digite seu email"
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="digite sua senha"
          required
        />

        <button type="submit">Entrar</button>

      <div className='rodapedoForm'>
          <Link to="/Cadastro" className='link-a'>Fazer cadastro</Link><br />
          <Link to="/Recuperacao" className='link-a'>Esqueci minha senha</Link>
      </div>
      </form>

      {loginMessage && (
        <div className="checkarray">
          <p>{loginMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
