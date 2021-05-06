import { SquareType } from '../types'

interface SquareProps {
  value: SquareType
  onClick: () => void
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
