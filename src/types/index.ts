export type SquareType = 'X' | 'O' | ''
export type HistoryType = { squares: SquareType[] }[]

export interface SquareProps {
  value: SquareType
  onClick: () => void
}

export interface BoardProps {
  squares: SquareType[]
  onClick: (i: number) => void
}
