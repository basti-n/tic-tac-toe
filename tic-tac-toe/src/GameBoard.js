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

  const [gameStatus, setGameStatus] = useState(initialState)
  const [player, setPlayer] = useState('X')

  useEffect(() => {
    axios
      .post('http://localhost:3000/result', gameStatus.game)
      .then((result) => setGameStatus(result.data))
      .catch((error) => console.error(error))
  }, [player])

  function playMove(event) {
    const cellToUpdate = gameStatus.game.findIndex(
      (cell) => cell.id === event.target.id
    )
    const newGameCells = [...gameStatus.game]
    newGameCells[cellToUpdate] = { value: player, id: event.target.id }
    setGameStatus({ ...gameStatus, game: newGameCells })
    setPlayer(player === 'X' ? 'O' : 'X')
  }

  return (
    <div className="board__grid">
      {gameStatus.game.map((gameValue) => (
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
