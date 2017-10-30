import React, { Component } from 'react';
import left from './image/left.svg';
import right from './image/right.svg';
import { siguiente, anterior, guardarRespuesta, comparationRespuestas, obtenerCorrectas, reiniciar } from './actions.js';

export const RedesSociales = () => {
    return (
        <div id="redesSociales" className="text-center">
            <a href="#" className="fa-stack fa-lg" style={{ color: '#00C3FF' }}>
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </a>
            <a href="#" className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" style={{ color: '#23239B' }}></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </a>
            <a href="#" className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" style={{ color: 'red' }}></i>
                <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
            </a>
        </div>
    );
}

/*export const BarraProgreso = ({ respuestas, deepdive }) => {
    return (
        <div id="progreso">
            <div className="progress-label">
                {respuestas} of {deepdive} answered
            </div>
            <ProgressBar now={respuestas * 20} />
        </div>
    );
}*/
const Opciones = ({ opciones, comparation }) => {
    return (
        <div className="opciones">
            {Object.keys(opciones).map((key, index) => {
                let value = opciones[key];
                return (
                    <div className={comparation === value ? 'seleccionado' : ''}>
                        <button key={index} onClick={() => guardarRespuesta(value)}>
                            <span className='letra'>{key} - </span>{value}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export const CrearPreguntas = ({ preguntaActual, respuestas, contar }) => {
    return (
        <div>
            <h1 className="text-center"> {preguntaActual.pregunta} </h1>
            <Opciones opciones={preguntaActual.opciones} comparation={respuestas[contar]} />
        </div>
    );
}

export const ListarRespuestas = ({ comparation, deepdive, respuestas }) => {
    let correctas = obtenerCorrectas();
    let expresion = correctas ? (correctas === deepdive.length ? 'Wow, ' : '') : 'Ooops, ';
    return (
        <div id='respuestas'>
            <h1 className="text-center">
                {!comparation && 'Here are you answers:'}
                {comparation && expresion + correctas + ' out of ' + deepdive.length + ' correct!'}
            </h1>
            {
                respuestas.map((item, index) => {
                    let clase = comparation ? (item == deepdive[index].respuesta ? 'text-success' : 'text-danger') : '';
                    let contenido = clase == 'text-danger' ?
                        <strong><strike>{item}</strike> {deepdive[index].respuesta}</strong>
                        : <strong>{item}</strong>;
                    return <p className={clase}>{index + 1}. {deepdive[index].pregunta} {contenido}</p>;
                })
            }
            <div>
                {comparation && <button  onClick={reiniciar}>Start Again</button>}
                {!comparation && <button  onClick={comparationRespuestas}>Submit</button>}
            </div>

        </div>
    );
}

/*export const Flechas = ({ respuestas, contar, marcar }) => {
    return (
        <div id="flechas" className="text-center">
            <button id="anterior" disabled={!(respuestas >= contar && contar)} onClick={marcar ? anterior : ''}>
                <img src={left} alt="" responsive />
            </button>
            <button id="siguiente" disabled={!(respuestas > contar)} onClick={marcar ? siguiente : ''}>
                <img src={right} alt="" responsive />
            </button>
        </div>
    );
}*/