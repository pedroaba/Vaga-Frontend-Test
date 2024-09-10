'use client'

import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { ColumnEditSidebar } from '@/components/column-edit-sidebar'
import { BoardContextProvider } from '@/context/board-context'

interface IProviderProps {
  children: ReactNode
}

export function Provider({ children }: IProviderProps) {
  return (
    <BoardContextProvider>
      {children}

      <Toaster position="top-center" closeButton />
      <ColumnEditSidebar />
    </BoardContextProvider>
  )
}
