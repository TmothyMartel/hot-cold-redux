//set winning number
// makeAGuess
// restart
//

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
});

export const GIVE_FEEDBACK = "GIVE_FEEDBACK";
export const giveFeedback = feedback => ({
	type: GIVE_FEEDBACK,
	feedback
});
