import { createContext, useContext, useState } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Cria um hook personalizado pra facilitar o uso
export function useAuth() {
  return useContext(AuthContext);
}

// Cria o provider
export function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');

  function salvarCredenciais({ email, senha, token }) {
    setEmail(email);
    setSenha(senha);
    setToken(token);
  }

  function limparCredenciais() {
    setEmail('');
    setSenha('');
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ email, senha, token, salvarCredenciais, limparCredenciais }}>
      {children}
    </AuthContext.Provider>
  );
}
