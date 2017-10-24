import React, { Component } from 'react';
import left from './image/left.svg';
import right from './image/right.svg';
import { Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';
import { siguiente, anterior, guardarRespuesta, compararRespuestas, obtenerCorrectas, reiniciar } from './actions.js';

export const Redes = () => {
    return (
        <div id="redes" className="text-center">
            <a href="#" className="fa-stack fa-lg" style={{ color: '#00C3FF' }}>
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </a>
            <a href="" className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" style={{ color: '#23239B' }}></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </a>
            <a href="" className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" style={{ color: 'red' }}></i>
                <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
            </a>
        </div>
    );
}

export const ProgressBar = ({ result, answer }) => {
    return (
        <div id="progress">
            <div className="progress-label">
                {result} of {answer} answered
            </div>
            <ProgressBar now={result * 20} />
        </div>
    );
}
const Opciones = ({ opciones, comparate }) => {
    return (
        <Row className="opciones">
            {Object.keys(opciones).map((key, index) => {
                let value = opciones[key];
                return (
                    <Col md={4} className={comparate===value ? 'seleccionado' : ''}>
                        <Button key={index} onClick={() => guardarRespuesta(value)}>
                            <span className='letra'>{key}</span>{value}
                        </Button>
                    </Col>
                );
            })}
        </Row>
    );
}

export const CreateAnswer = ({ question, respuestas, contar }) => {
    return (
        <div>
            <h1 className="text-center"> {question.pregunta} </h1>
            <Opciones opciones={question.opciones} comparar={respuestas[contar]} />
        </div>
    );
}

export const ListChoise = ({ comparar, preguntas, respuestas }) => {
    let correctas = obtenerCorrectas();
    let expresion = correctas ? (correctas === preguntas.length ? 'Wow, ' : '') : 'Ooops, ';
    return (
        <div id='respuestas'>
            <h1 className="text-center">
                {!comparar && 'Here are you answers:'}
                {comparar && expresion + correctas + ' out of ' + preguntas.length + ' correct!'}
            </h1>
            {
                respuestas.map((item, index) => {
                    let clase = comparar ? (item == preguntas[index].respuesta ? 'text-success' : 'text-danger') : '';
                    let contenido = clase == 'text-danger' ? <strong><strike>{item}</strike> {preguntas[index].respuesta}</strong> : <strong>{item}</strong>;
                    return <p className={clase}>{index + 1}. {preguntas[index].pregunta} {contenido}</p>;
                })
            }
            <div className='text-center'>
                {comparar && <Button className='btn-dark' bsSize="large" onClick={() => reiniciar()}>Start Again</Button>}
                {!comparar && <Button className='btn-dark' bsSize="large" onClick={() => compararRespuestas()}>Submit</Button>}
            </div>

        </div>
    );
}

export const Flechas = ({ result, cont, marcar }) => {
    return (
        <div id="flechas" className="text-center">
            <Button id="anterior" disabled={!(result >= cont && marcar && cont)} onClick={() => anterior()}>
                <Image src={left} alt="" responsive />
            </Button>
            <Button id="siguiente" disabled={!(result > cont & marcar)} onClick={() => siguiente()}>
                <Image src={right} alt="" responsive />
            </Button>
        </div>
    );
}