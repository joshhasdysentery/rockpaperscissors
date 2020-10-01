import React from 'react';
import scissors from './assets/scissors.PNG';
import rock from './assets/rock.png';
import paper from './assets/paper.PNG';

const Player = ({ choices }) => {
  return (
    <div className="player">
      <img
        className="player-image"
        src={
          choices === 'rock' ? rock : choices === 'scissors' ? scissors : paper
        }
        alt="rock paper scissor"
      />
    </div>
  );
};

export default Player;
