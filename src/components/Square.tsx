import { useState } from 'react'

interface SquareProps {
  value: string | number
}

export default function Square(_props: SquareProps) {
  const [value, setValue] = useState<string | number>('')

  return (
    <button
      className="square"
      onClick={() => {
        setValue('X')
      }}
    >
      {value}
    </button>
  )
}
