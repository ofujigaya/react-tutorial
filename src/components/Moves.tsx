import { HistoryType } from '../types/interface'

interface MovesProps {
  history: HistoryType
  jumpTo: (move: number) => void
}
const Moves: React.FC<MovesProps> = ({ history, jumpTo }) => {
  return (
    <ol>
      {history.map((_step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start'
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      })}
    </ol>
  )
}

export default Moves
