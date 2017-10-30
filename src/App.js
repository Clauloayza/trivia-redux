import React, { Component } from 'react';
import truck from './image/track.svg'
import { connect } from 'redux-zero/react'
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas, BarraProgreso } from './components.js';
import logo from './logo.svg';
import './App.css';

const App = ({deepdive,contar, complet,comparation,marcar,respuestas}) => {
  const preguntaActual = deepdive[contar];
  return (
    <div className="container">
      <header className="text-center">
      </header>
      <div className="content">
          <div id="progress">
            <div className="progress-label">
          </div>
            <div className="progress">
              
            </div>
          </div>
       
        <div id="quiz">
        {!complet && <img src={preguntaActual.image} />}
        {!complet && <img src={truck} />}
          <p>{!complet && <CrearPreguntas preguntaActual={preguntaActual} respuestas={respuestas} contar={contar} />}
        </p>
        <ol>
          {complet && <ListarRespuestas comparation={comparation} respuestas={respuestas} deepdive={deepdive} />}
        </ol>
        </div>
      </div>
        <div id="flechas" className="text-center">
          
        </div>
      
    </div>);
}

const maptoProps = ({deepdive,contar, complet,comparation,marcar,respuestas})=> ({deepdive,contar, complet,comparation,marcar,respuestas}); 
export default connect(maptoProps) (App);
