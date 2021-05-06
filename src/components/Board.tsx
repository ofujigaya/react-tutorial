import { useState } from 'react'
import Square from './Square'
import { SquareType } from '../types'

export default function Board() {
  const [_squares, setSquares] = useState(Array<SquareType>(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    const squares = _squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setSquares(squares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(_squares)
  let status
  if (winner) {
    status = 'Winner:' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div>
      <div className="status">{status}</div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              const index: number = 3 * i + j
              return <Square value={_squares[index]} onClick={() => handleClick(index)} key={j} />
            })}
          </div>
        )
      })}
    </div>
  )
}

function calculateWinner(squares: SquareType[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
