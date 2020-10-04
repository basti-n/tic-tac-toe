import Axios from 'axios'
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

  function restartGame() {
    Axios.post('http://localhost:3000/result/restart')
      .then((result) => setGameStatus(result.data))
      .catch((error) => console.error(error))
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
          <p className="game__over">Game over.</p>
          <button className="game__restart" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      ) : (
        <p className="game__playing">
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
