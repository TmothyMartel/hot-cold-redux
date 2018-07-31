//set winning number
// makeAGuess
// restart
//

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = restart => ({
	type: RESTART_GAME,
	restart
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = update => ({
	type: GENERATE_AURAL_UPDATE,
	update
});


