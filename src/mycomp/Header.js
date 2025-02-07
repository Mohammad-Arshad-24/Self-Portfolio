import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">MOHAMMED ARSHAD</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
