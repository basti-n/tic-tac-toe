import React, { useState } from 'react'

export default function GameBoard() {
  const initialState = {
    game: [
      { value: 'x', id: 'ttt_1' },
      { value: null, id: 'ttt_2' },
      { value: 'x', id: 'ttt_3' },
      { value: null, id: 'ttt_4' },
      { value: null, id: 'ttt_5' },
      { value: 'o', id: 'ttt_6' },
      { value: null, id: 'ttt_7' },
      { value: null, id: 'ttt_8' },
      { value: 'x', id: 'ttt_9' },
    ],
    completed: false,
    winner: null,
  }
  const [gameStatus, setGameStatus] = useState(initialState)

  const currentGame = gameStatus.game

  return (
    <div className="board__grid">
      {currentGame.map((gameValue) => (
        <div key={gameValue.id} className="board__item">
          {gameValue.value}
        </div>
      ))}
    </div>
  )
}
