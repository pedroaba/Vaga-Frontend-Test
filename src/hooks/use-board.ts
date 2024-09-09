import { useContext } from 'react'

import { BoardContext } from '@/context/board-context'

export function useBoard() {
  return useContext(BoardContext)
}
