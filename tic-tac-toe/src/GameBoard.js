import axios from 'axios'
import React, { useEffect } from 'react'

export default function GameBoard({
  player,
  updatePlayer,
  gameStatus,
  updateGameStatus,
}) {
  useEffect(() => {
    axios
      .post('http://localhost:3000/result', gameStatus.game)
      .then((result) => updateGameStatus(result.data))
      .catch((error) => console.error(error))
  }, [])

  function playMove(event) {
    const cellToUpdate = gameStatus.game.findIndex(
      (cell) => cell.id === event.target.id
    )

    if (event.target.textContent === '') {
      const newGameCells = [...gameStatus.game]
      newGameCells[cellToUpdate] = { value: player, id: event.target.id }
      updateGameStatus({ ...gameStatus, game: newGameCells })
      updatePlayer(player === 'X' ? 'O' : 'X')
    } else {
      return
    }
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
