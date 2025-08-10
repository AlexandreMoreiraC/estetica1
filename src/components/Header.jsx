import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Luxurious Salon</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre Nós</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
