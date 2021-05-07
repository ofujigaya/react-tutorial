import { useState } from 'react'
import Board from './Board'
import Moves from './Moves'
import { calculateWinner, getStatus } from '../logic'
import { HistoryType } from '../types'

export default function Game() {
  const [histories, setHistories] = useState<HistoryType>([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    const history = histories.slice(0, stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistories(history.concat([{ squares: squares }]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = histories[stepNumber]
  const winner = calculateWinner(current.squares)
  const status = getStatus(winner, xIsNext)

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves histories={histories} jumpTo={jumpTo} />
      </div>
    </div>
  )
}
