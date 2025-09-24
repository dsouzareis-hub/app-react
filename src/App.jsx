import './App.css';
import Cadastro from './components/Cadastro';
import Menu from './components/Menu';
import Recuperacao from './components/Recuperacao';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperacao" element={<Recuperacao />} />
      </Routes>
    </Router>
  );
}

export default App;
