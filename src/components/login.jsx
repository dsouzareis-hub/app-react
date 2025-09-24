import React, { useState, useEffect } from 'react';
import '../styles/loginStyle.css';

function Login() {
  const [username, setUsername] = useState('');
  const [form, setForm] = useState({nome:'', email:'', password:''});

useEffect (()=>{
  const dadosSalvos = JSON.parse(localStorage.getItem('username'));
  setUsername(dadosSalvos);
},[]);

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value});
}
  const handleSubmit = (e) => {
    e.preventDefault();

    const novosUsuarios = [...username, form];
    setForm(novosUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(novosUsuarios));

    setForm({nome:'', email:'', password:''});

            alert(`
            Nome: ${form.nome}
            Email: ${form.email}
            Senha: ${form.password}
          `);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          name='nome'
          id="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="digite seu nome"
          required
        />
        <input
          type="email"
          name='email'
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="digite seu email"
          required
        />
          <input
          type="password"
          name='password'
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="digite sua senha"
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
