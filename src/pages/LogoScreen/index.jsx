import React from 'react';
import './Styles/styles.css';
import Logo from '../../../assets/img/LogoBranca.png';

function LogoScreen() {
  return (
    <div className="logo-screen-container">
      <img src={Logo} alt="Logo" className="logo" />
      <p className="logo-text">A inteligência para cada versão do seu mundo</p>
    </div>
  );
}

export default LogoScreen;
