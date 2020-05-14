import React from 'react';
import './FailedScreen.css';
import error from '../../assets/warning.svg';
import { Link } from 'react-router-dom';


function FailedScreen() {
  return (
    <div className="failed-screen-container">
        <h1>Algo parece ter dado errado.</h1>
        <Link to="/">
            Voltar para a página inicial
        </Link>
        <img src={error} alt="Ops, algo deu errado." />
    </div>
  );
};

export default FailedScreen;