import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GameBoard() {
  const initialState = {
    game: [
      { value: null, id: 'ttt_1' },
      { value: null, id: 'ttt_2' },
      { value: null, id: 'ttt_3' },
      { value: null, id: 'ttt_4' },
      { value: null, id: 'ttt_5' },
      { value: null, id: 'ttt_6' },
      { value: null, id: 'ttt_7' },
      { value: null, id: 'ttt_8' },
      { value: null, id: 'ttt_9' },
    ],
    completed: false,
    winner: null,
  }

  /*   useEffect(() => {
    const updatedGameStatus = axios
      .post('http://localhost:3000/result')
      .then((result) => console.log(result))
  }, []) */

  const [gameStatus, setGameStatus] = useState(initialState)
  const currentGame = gameStatus.game

  function playMove(event) {
    const cellToUpdate = gameStatus.game.findIndex(
      (cell) => cell.id === event.target.id
    )
    const newGameCells = [...gameStatus.game]
    newGameCells[cellToUpdate] = { value: 'X', id: event.target.id }
    const updatedGame = newGameCells
    setGameStatus({ ...gameStatus, game: updatedGame })
  }

  return (
    <div className="board__grid">
      {currentGame.map((gameValue) => (
        <div
          key={gameValue.id}
          className="board__item"
          id={gameValue.id}
          onClick={playMove}
        >
          {gameValue.value}
        </div>
      ))}
    </div>
  )
}
