import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Luxurious Salon</Link>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li><Link to="/about" onClick={closeMenu}>Sobre Nós</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contato</Link></li>
        </ul>
      </nav>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
