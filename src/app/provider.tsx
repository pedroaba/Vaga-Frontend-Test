'use client'

import type { ReactNode } from 'react'

import { BoardContextProvider } from '@/context/board-context'

interface IProviderProps {
  children: ReactNode
}

export function Provider({ children }: IProviderProps) {
  return <BoardContextProvider>{children}</BoardContextProvider>
}
