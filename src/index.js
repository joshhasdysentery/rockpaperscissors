import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles.css';
import Player from './Player';

const choices = ['rock', 'paper', 'scissors'];
class Application extends React.Component {
  state = {
    playerOne: choices[0],
    playerTwo: choices[0],
    winner: '',
  };

  startGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count++;
      this.setState({
        playerTwo: choices[Math.floor(Math.random() * choices.length)],
        winner: '',
      });
      if (count > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner(),
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    if (playerOne === playerTwo) {
      return 'Its a Tie';
    } else if (
      (playerOne === 'rock' && playerTwo === 'scissors') ||
      (playerOne === 'scissors' && playerTwo === 'paper') ||
      (playerOne === 'paper' && playerTwo === 'rock')
    ) {
      return 'You Win';
    } else {
      return 'Computer Wins';
    }
  };

  selectChoice = (choice) => {
    this.setState({
      playerOne: choice,
      winner: '',
    });
  };

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 id="title">Rock Paper Scissors</h1>
        <div>
          <Player choices={playerOne} />
          <Player choices={playerTwo} />
        </div>
        <div id="choices">
          <button
            className="choiceBtn"
            onClick={() => this.selectChoice('rock')}
          >
            rock
          </button>
          <button
            className="choiceBtn"
            onClick={() => this.selectChoice('paper')}
          >
            paper
          </button>
          <button
            className="choiceBtn"
            onClick={() => this.selectChoice('scissors')}
          >
            scissors
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>

        <button id="startButton" onClick={this.startGame}>
          Start
        </button>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Application />, rootElement);
serviceWorker.unregister();
