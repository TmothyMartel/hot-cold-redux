import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoSection from "./info-section";


export function Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection
          feedback={props.feedback}
          guessCount={props.guesses.length}
          onMakeGuess={guess => this.makeGuess(guess)}
        />
        <StatusSection
          guesses={props.guesses}
          auralStatus={props.auralStatus}
        />
        <InfoSection />
      </main>
    </div>
  );
}

Game.defaultProps = {
  guesses: [],
  feedback: "Make a Guess",
  auralStatus: "",
  correctAnswer: Math.round(Math.random() * 100) + 1
};

const mapStateToProps = state => ({
  guesses: [23, 60, 88],
  feedback: "You are Ice Cold",
  auralStatus: `Here's the status of the game right now: ${
    state.feedback
  } You've made ${state.guesses.length}.`,
  correctAnswer: 30
});

export default connect(mapStateToProps)(Game);
