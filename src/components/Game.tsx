import { useState } from 'react'
import Board from './Board'
import { HistoryType } from '../types'
import { calculateWinner } from '../logic'

export default function Game() {
  const [history, setHistory] = useState<HistoryType>([{ squares: Array(9).fill('') }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1)
    const current = _history[_history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(_history.concat([{ squares: squares }]))
    setStepNumber(_history.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((_step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
