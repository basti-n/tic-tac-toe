import React, { useState } from 'react'

export default function GameBoard() {
  const [gameStatus, setGameStatus] = useState({
    game: [
      { value: null, id: 'top-left' },
      { value: null, id: 'top-middle' },
      { value: 'x', id: 'top-rigth' },
      { value: null, id: 'middle-left' },
      { value: null, id: 'middle-middle' },
      { value: 'o', id: 'middle-rigth' },
      { value: null, id: 'bottom-left' },
      { value: null, id: 'bottom-middle' },
      { value: 'x', id: 'bottom-rigth' },
    ],
    completed: false,
    winner: null,
  })
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
