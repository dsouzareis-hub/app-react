import React, { useState, useEffect } from 'react';
import '../styles/cadastroStyle.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [username, setUsername] = useState([]);
  const [form, setForm] = useState({nome:'', email:'', password:''});

useEffect (()=>{
  const dadosSalvos = JSON.parse(localStorage.getItem('username')) || [];
  setUsername(dadosSalvos);
},[]);

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value});
}
  const handleSubmit = (e) => {
    e.preventDefault();

      const novoUsuario = {
    id: Date.now(),
    ...form
  };

    const novosUsuarios = [...username, novoUsuario];
    setUsername(novosUsuarios);
    localStorage.setItem('username', JSON.stringify(novosUsuarios));
            alert(`
            Nome: ${form.nome}
            Email: ${form.email}
            Senha: ${form.password}
          `);

              setForm({nome:'', email:'', password:''});

  };

    const delUser = () => {
  setUsername([]);
  localStorage.removeItem('username');
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <label htmlFor="nome">Usuário:</label>
        <input
          type="text"
          name='nome'
          id="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="digite seu nome"
          required
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name='email'
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="digite seu email"
          required
        />
          <label htmlFor="password">Senha:</label>
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

      <div className='rodapedoForm'>
          <Link to="/Login">Fazer login</Link><br />
          <Link to="/Recuperacao">Esqueci minha senha</Link>
      </div>

      </form>
      <div className='buttonDelUser'>
        <button onClick={delUser}>Limpar usuários</button>
       </div>
      <div className="checkarray">
        <ul>
          {username.map((user, index) => (
            <li key={user.id}>
              Nome: {user.nome}, Email: {user.email}, Senha: {user.password} ID:{user.id} 
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Cadastro;
