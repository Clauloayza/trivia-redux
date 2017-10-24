import store from "./store";

export const incrementScore = (index) => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();
	const cloneList = [...store.getState().players];
	cloneList[index].score++;
	cloneList[index].updated = `${month}/${day}/${year}`;

	store.setState({
		players: cloneList
	})
};

export const decrementScore = (index) => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();
	const cloneList = [...store.getState().players];
	cloneList[index].score--;
	cloneList[index].updated = `${month}/${day}/${year}`;

	store.setState({
		players: cloneList
	})
};

export const addPlayer = (name) => {

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

	const addPlayerList = [...store.getState().players,   {
		id : store.getState().players.length + 1,
		name: name,
		score: 0,
		created: `${month}/${day}/${year}`
	}];

	store.setState({
		players: addPlayerList
	})
}


export const removePlayer = (index) => {
	const addPlayerList =  store.getState().players.filter( (item, idx) => idx != index );

	store.setState({
		players: addPlayerList
	})
}


export const selectPlayer = (index) => {


	store.setState({
		selectedPlayerIndex : index
	})
}