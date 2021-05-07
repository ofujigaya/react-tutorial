import Square from './Square'
import { SquareType } from '../types'

interface BoardProps {
  squares: SquareType[]
  onClick: (i: number) => void
}
export default function Board(props: BoardProps) {
  return (
    <div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              const index: number = 3 * i + j
              return <Square value={props.squares[index]} onClick={() => props.onClick(index)} key={j} />
            })}
          </div>
        )
      })}
    </div>
  )
}
