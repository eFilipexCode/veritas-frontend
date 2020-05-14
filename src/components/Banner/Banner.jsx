import React from 'react';
import img from '../../assets/thumb-banner.PNG';
import './Banner.css';

function Banner() {
  return (
    <div className="initial-banner">
      <div className="background-banner">
        <div className="color-overlay"></div>
        <img src={img} className="background-img" alt="Bem-vindo ao nosso blog."/>
      </div>
      <div className="text-apresentation">
        <h1>Veritas</h1>
        <p>"Que Deus nos dê a paz que o mundo não pode dar."</p>
      </div>
    </div>
  );
}

export default Banner;