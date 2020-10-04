import React, { useState } from 'react'
import GameBoard from './GameBoard'

function App() {
  const [gameStatus, setGameStatus] = useState({
    game: [],
    completed: false,
    winner: false,
  })
  const [player, setPlayer] = useState('X')

  function updatePlayer(nextPlayer) {
    setPlayer(nextPlayer)
  }

  function updateGameStatus(newStatus) {
    setGameStatus(newStatus)
  }

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      {gameStatus.winner ? (
        <p className="winner">The winner is {gameStatus.winner}</p>
      ) : (
        ''
      )}
      {gameStatus.completed !== false ? (
        <div>
          <p>Game is done</p>
          <button className="game__restart">Restart</button>
        </div>
      ) : (
        <p>
          Next is <b>{player}</b>.
        </p>
      )}
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
