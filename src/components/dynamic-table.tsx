'use client'

import { Plus } from 'lucide-react'

import { useBoard } from '@/hooks/use-board'
import { cn } from '@/lib/utils'

import { Column } from './column'
import { Button } from './ui/button'

export function DynamicTable() {
  const {
    table,
    addNewColumn,
    changeOrderOfTableColumns,
    isInPreview,
    selectAColumn,
    selectTable,
  } = useBoard()

  function handleChangeColumnPosition(columnId: string, dir: 'right' | 'left') {
    const columnsIndex = table.columns.findIndex(
      (column) => column.id === columnId,
    )
    if (columnsIndex === -1) return

    const newColumnsPosition =
      dir === 'right' ? columnsIndex + 1 : columnsIndex - 1

    const [removed] = table.columns.splice(columnsIndex, 1)
    table.columns.splice(newColumnsPosition, 0, removed)

    changeOrderOfTableColumns([
      ...table.columns.map((column, position) => ({ ...column, position })),
    ])
  }

  function handleAddColumn() {
    addNewColumn({
      id: crypto.randomUUID(),
      position: table.columns.length,
      title: `Column ${table.columns.length + 1}`,
    })
  }

  function handleColumnClick(columnId: string) {
    selectAColumn(columnId)
  }

  return (
    <div
      data-testid="dynamic-table"
      className={cn(
        'min-w-[600px] max-w-[650px] h-64 bg-zinc-800 overflow-y-hidden rounded-md shadow-lg shadow-zinc-700',
        isInPreview && 'overflow-y-auto',
      )}
    >
      <div
        onClick={selectTable}
        data-testid="table-head"
        className="w-full h-10 bg-zinc-900 rounded-t-md flex items-center px-4"
      >
        <span data-testid="table-title">{table.title}</span>
      </div>
      <div
        data-testid="table-body"
        className={cn(
          'h-[calc(100%-40px)] overflow-y-hidden w-full flex overflow-x-auto duration-1000 divide-x-2 divide-zinc-500 transition-all',
        )}
      >
        {table.columns.map((column) => (
          <Column
            onColumnClick={handleColumnClick}
            isInPreview={isInPreview}
            isFirstColumn={column.position === 0}
            isLastColumn={column.position >= table.columns.length - 1}
            title={column.title}
            key={column.id}
            id={column.id}
            onChangeColumnPosition={handleChangeColumnPosition}
          />
        ))}

        {!isInPreview && (
          <Button
            data-testid="add-column-button"
            className="bg-transparent rounded-none h-full min-w-48 flex justify-center items-center gap-2 text-zinc-400 cursor-pointer"
            onClick={handleAddColumn}
          >
            <Plus className="size-5" />
            Add
          </Button>
        )}
      </div>
    </div>
  )
}
