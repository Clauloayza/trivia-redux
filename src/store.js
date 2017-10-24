import createStore from "redux-zero";


let PLAYERS = [
	{
		name: "Jim Hoskins",
		score: 31,
		id: 1,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: "Andree Hoskins",
		score: 35,
		id: 2,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: "Alena Hoskins",
		score: 42,
		id: 3,
		created: '11/11/2016',
		updated: '11/12/2016'
	},
];
const initialState = {
	players: PLAYERS,
	selectedPlayerIndex: -1
};

const store = createStore(initialState);

export default store;
