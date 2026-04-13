import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoQuiz from '../../assets/images/quiz.png'

import './style.css';

export default function Home() {
  const navigate = useNavigate();

  function start() {
    return navigate('/game');
  }

  return (
    <div className='container'>
        <h1 className='title'>Bem vindo ao</h1>
        <img src={logoQuiz} alt='Logo Quiz' className='logo'/>
        <small className='description'>Teste seus conhecimentos sobre React</small>

        <button onClick={start} className='button-start'>🚀 Começar</button>

        <footer className='footer'>
            <span className='author'>Criado por <a href="https://github.com/caldeira54/" target="_blank" rel='noreferrer' className='author'>Arthur 😎</a></span>
        </footer>
    </div>
  );
}