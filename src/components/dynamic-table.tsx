'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Column } from './column'
import { Button } from './ui/button'

type ColumnData = {
  id: string
  position: number
  title: string
}

export function DynamicTable() {
  const [columns, setColumns] = useState<ColumnData[]>([])

  function handleChangeColumnPosition(columnId: string, dir: 'right' | 'left') {
    const columnsIndex = columns.findIndex((column) => column.id === columnId)
    if (columnsIndex === -1) return

    const newColumnsPosition =
      dir === 'right' ? columnsIndex + 1 : columnsIndex - 1

    const [removed] = columns.splice(columnsIndex, 1)
    columns.splice(newColumnsPosition, 0, removed)

    setColumns([
      ...columns.map((column, position) => ({ ...column, position })),
    ])
  }

  function handleAddColumn() {
    setColumns((state) => [
      ...state,
      {
        id: crypto.randomUUID(),
        position: state.length,
        title: `Column ${state.length + 1}`,
      },
    ])
  }

  return (
    <div
      data-testid="dynamic-table"
      className="min-w-[600px] max-w-[650px] h-64 bg-zinc-800 rounded-md shadow-lg shadow-zinc-700"
    >
      <div
        data-testid="table-head"
        className="w-full h-10 bg-zinc-900 rounded-t-md flex items-center px-4"
      >
        <span data-testid="table-title">Tabela de teste</span>
      </div>
      <div
        data-testid="table-body"
        className="h-[calc(100%-40px)] w-full flex overflow-x-auto divide-x-2 divide-zinc-500 transition-all"
      >
        {columns.map((column) => (
          <Column
            isFirstColumn={column.position === 0}
            isLastColumn={column.position >= columns.length - 1}
            title={column.title}
            key={column.id}
            id={column.id}
            onChangeColumnPosition={handleChangeColumnPosition}
          />
        ))}

        <Button
          data-testid="add-column-button"
          className="bg-transparent rounded-none h-full min-w-48 flex justify-center items-center gap-2 text-zinc-400 cursor-pointer"
          onClick={handleAddColumn}
        >
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </div>
  )
}
