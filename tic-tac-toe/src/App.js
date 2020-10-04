import React, { useState } from 'react'
import GameBoard from './GameBoard'

function App() {
  const [gameStatus, setGameStatus] = useState({
    game: [],
    completed: false,
    winner: null,
  })
  const [player, setPlayer] = useState('X')

  function updatePlayer(nextPlayer) {
    setPlayer(nextPlayer)
  }

  function updateGameStatus(newStatus) {
    setGameStatus(newStatus)
  }
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <p>Play a round of Tic Tac Toe</p>
      <p>
        Next is <b>{player}</b>.
      </p>
      <GameBoard
        player={player}
        updatePlayer={updatePlayer}
        gameStatus={gameStatus}
        updateGameStatus={updateGameStatus}
      />
    </main>
  )
}

export default App
