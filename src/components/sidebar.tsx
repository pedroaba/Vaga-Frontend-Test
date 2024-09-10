'use client'

import { useBoard } from '@/hooks/use-board'
import { cn } from '@/lib/utils'

import { Input } from './ui/input'
import { Sheet, SheetContent, SheetHeader, SheetPortal } from './ui/sheet'

export function Sidebar() {
  const {
    table,
    onChangeTableTitle,
    isInPreview,
    isTableSelected,
    unselectTable,
  } = useBoard()
  const isEmptyTableTitle = table.title.trim().length === 0

  function handleOnChangeTitle(title: string) {
    onChangeTableTitle(title)
  }

  return (
    <Sheet open={isTableSelected} onOpenChange={unselectTable}>
      <SheetPortal>
        <SheetContent
          data-testid="sidebar"
          className="bg-zinc-800 h-full p-8 space-y-8"
        >
          <SheetHeader>
            <h1 className="text-xl">Table: {table.title}</h1>
          </SheetHeader>

          <div className="space-y-2">
            <h2 className={cn(isEmptyTableTitle && 'text-red-500')}>
              Título *
            </h2>

            <Input
              data-testid="table-title-input"
              disabled={isInPreview}
              placeholder="Ex: Dynamic Table..."
              value={table.title}
              className={cn(isEmptyTableTitle && 'border-red-500')}
              onChange={(ev) => handleOnChangeTitle(ev.target.value)}
              maxLength={32}
              minLength={5}
            />

            {isEmptyTableTitle && (
              <span className="text-xs text-red-500">
                O título da tabela não pode ser vazio
              </span>
            )}
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  )
}
