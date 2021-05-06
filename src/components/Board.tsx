import Square from './Square'

export default function Board() {
  const status = 'Next player: X'

  return (
    <div>
      <div className="status">{status}</div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              return <Square key={j} />
            })}
          </div>
        )
      })}
    </div>
  )
}
