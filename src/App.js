import React, {Component} from 'react';
import { connect } from "redux-zero/react";
import { incrementScore, decrementScore, addPlayer, removePlayer, selectPlayer } from "./actions";
import './App.css';


const Player = ({name, score, decrement, increment, selectPlayer, removePlayer}) => {
	return (
		<div className="player">
			<div className="player-name" onClick={selectPlayer}>
				<a className="remove-player"
				   onClick={removePlayer}>
					✖
				</a>
				{name}
			</div>
			<div className="player-score">
				<div className="counter">
					<button className="counter-action decrement" onClick={decrement}>-</button>
					<div className="counter-score"> {score} </div>
					<button className="counter-action increment" onClick={increment}>+</button>
				</div>
			</div>
		</div>
	);
}

function Stats(props) {
	var totalPlayers = props.players.length;
	var totalPoints = props.players.reduce(function (total, player) {
		return total + player.score;
	}, 0);

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPoints}</td>
			</tr>
			</tbody>
		</table>
	)
}

const PlayerDetail = ({ selectedPlayer }) => {
	if(selectedPlayer){
		return (
			<div>
				<h3>{selectedPlayer.name}</h3>
				<ul>
					<li>
						<span>Score: </span>
						{selectedPlayer.score}
					</li>
					<li>
						<span>Created: </span>
						{selectedPlayer.created}
					</li>
					<li>
						<span>Updated: </span>
						{selectedPlayer.updated}
					</li>
				</ul>
			</div>
		);
	}
	else {
		return (<p>Click on a player to see more details</p>);
	}
};

const App = ({players, selectedPlayerIndex}) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
		addPlayer(this.playerInputRef.value)
	}
	const playerComponents =  players.map ( (player, index) => {
			return <Player
					key = {index}
					name={player.name}
					score={player.score}
					increment={ () => incrementScore(index)}
					decrement={ () => decrementScore(index)}
					removePlayer={ () => removePlayer (index) }
					selectPlayer={ () => selectPlayer (index) }
 				/>
		})

	let selectedPlayer;
	if(selectedPlayerIndex !== -1){
		selectedPlayer = players[selectedPlayerIndex];
	}

	return (
		<div className="scoreboard">

			<div className="header">
				<Stats players={players}/>
				<h1>SCOREBOARD</h1>
			</div>
			<div className="players">
				{playerComponents}
			</div>

			<div className="add-player-form">
				<form onSubmit = {onSubmit}>
					<input placeholder="Enter a name" type="text"  ref={(e) => this.playerInputRef = e} />
					<input type="submit" value="Add Player"/>
				</form>
			</div>
			<div className="player-detail">
				<PlayerDetail selectedPlayer={selectedPlayer} />
			</div>
		</div>
	);
}

const mapToProps = ({players, selectedPlayerIndex}) => ({players, selectedPlayerIndex});

export default connect(mapToProps)(App);

