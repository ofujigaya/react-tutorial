import { HistoryType } from '../types'

interface MovesProps {
  histories: HistoryType
  jumpTo: (move: number) => void
}

export default function Moves({ histories, jumpTo }: MovesProps) {
  return (
    <ol>
      {histories.map((_, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start'
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      })}
    </ol>
  )
}
