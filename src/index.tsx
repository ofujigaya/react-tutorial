import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

type SquareProps = {
  value: string
  onClick: () => void
}
type SquareState = {
  value: string
}
class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

type BoardProps = {
  squares: string[]
}
type BoardState = {
  squares: string[]
}
const squares = Array<string>(9).fill('')
class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      squares: squares,
    }
  }

  handleClick(i: number) {
    console.log(i) // open and check the DevTools
    const squares: Array<string> = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({
      squares: squares,
    })
    console.log(this.state)
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
