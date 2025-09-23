import React from 'react';
import '../styles/menuFaixa.css';

const MenuFaixa = () => {
  return (
    <nav className="menu-faixa">
      <a className="menu-item" href="#home">Home</a>
      <a className="menu-item" href="#contato">Contato</a>
      <a className="menu-item" href="#sobre">Sobre</a>
    </nav>
  );
};

export default MenuFaixa;