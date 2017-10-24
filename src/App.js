import React, {Component} from 'react';
import { connect } from "redux-zero/react";
import { Image } from 'react-bootstrap';
import track from './image/track.svg';
import { ProgressBar, CreateAnswer, ListChoise, Flechas, Redes } from "./components.js";
import './App.css';

const App = ({answer, cont, allcomplete, comparate, result }) => {
	const answerActual = answer[cont];
	return(
		<div className='container'>
			<header>
				{!allcomplete && <Image src={answerActual.image}/>}
				{allcomplete && <Image src={track}/>}
			</header>
			<div className="box-content">
				{!allcomplete && <ProgressBar result={result.length} answer={answer.length}/>}
				<div className="quiz">
					{!allcomplete && <CreateAnswer question={answerActual} result={result} cont={cont}/>}
					{allcomplete && <ListChoise comparate={comparate} result={result} answer={answer}/>}
				</div>
				<Redes/>
			</div>
			{!allcomplete && result.length != 0 && <Flechas result={result.length} cont={cont} marcar={true}/>}
		</div>
	);
}

const mapToProps = ({answer, cont, allcomplete, comparate, result}) => ({answer, cont, allcomplete, comparate, result});

export default connect(mapToProps)(App);

