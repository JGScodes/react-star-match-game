import React, { useState } from 'react';
import Game from './Game';

// STAR MATCH - V7
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  // When the gameId increases by 1 when the play again button gets clicked the game will be reset with a new gameId and state which will unmount the current game component which also cleans up any side effects brought on by useEffects() and will introduce a new stae/gameId/component. All the state elemnts will be brand new because we are mounting a new game
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

export default StarMatch;
