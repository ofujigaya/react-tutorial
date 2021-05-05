export type SquareType = Array<'X' | 'O'>
export interface GameState {
  history: { squares: SquareType }[]
  stepNumber: number
  xIsNext: boolean
}

export interface BoardProps {
  squares: SquareType
  onClick: (i: number) => void
}

export interface SquareProps {
  value: string
  onClick: () => void
}
