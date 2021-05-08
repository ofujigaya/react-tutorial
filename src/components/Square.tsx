import { SquareType } from '../types'

interface SquareProps {
  value: SquareType
  onClick: () => void
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}
