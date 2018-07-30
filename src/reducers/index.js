import * as action from "../actions";

const initialState = {
	guesses: [],
	feedback: "Make your guess!",
	auralStatus: "",
	correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state = initialState, action) => {
	return state;
	console.log(state);
	console.log(action);
};
