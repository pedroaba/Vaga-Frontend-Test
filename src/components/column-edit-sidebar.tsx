import { useBoard } from '@/hooks/use-board'
import { cn } from '@/lib/utils'

import { Input } from './ui/input'
import { Label } from './ui/label'
import { Sheet, SheetContent, SheetHeader, SheetPortal } from './ui/sheet'

export function ColumnEditSidebar() {
  const { selectedColumn, unselectAColumn, onChangeColumnTitle, isInPreview } =
    useBoard()

  const isEmptyColumnTitle = (selectedColumn?.title ?? 'column').length === 0

  return (
    <Sheet
      open={selectedColumn !== null}
      onOpenChange={(isOpened) => {
        if (!isOpened) unselectAColumn()
      }}
    >
      <SheetPortal>
        <SheetContent className="bg-zinc-800">
          <SheetHeader>
            <span>Coluna: {selectedColumn?.title}</span>
          </SheetHeader>

          <div className="mt-8 space-y-2">
            <Label>Título da coluna: *</Label>
            <Input
              disabled={isInPreview}
              placeholder="Ex: coluna.."
              value={selectedColumn?.title}
              className={cn(isEmptyColumnTitle && 'border-red-500')}
              onChange={(event) =>
                onChangeColumnTitle(
                  event.target.value,
                  selectedColumn?.id ?? 'non-id',
                )
              }
            />

            {isEmptyColumnTitle && (
              <span className="text-xs text-red-500">
                O título da coluna não pode ser vazio
              </span>
            )}
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  )
}
