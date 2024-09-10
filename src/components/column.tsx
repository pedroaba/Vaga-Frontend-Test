import { fakerPT_BR } from '@faker-js/faker'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { slugify } from '@/utils/slug'

import { Button } from './ui/button'

interface ColumnProps {
  id: string
  isFirstColumn?: boolean
  isLastColumn?: boolean
  isInPreview?: boolean
  title: string
  onChangeColumnPosition: (columnId: string, dir: 'right' | 'left') => void
  onColumnClick: (columnId: string) => void
}

export function Column({
  title,
  id,
  isFirstColumn = false,
  isLastColumn = false,
  isInPreview = false,
  onChangeColumnPosition,
  onColumnClick,
}: ColumnProps) {
  function handleOnColumnClick() {
    onColumnClick(id)
  }

  return (
    <div id={id} data-testid={`column-${slugify(title)}`} className="w-full">
      <div className="bg-zinc-700/50 py-2.5 text-center flex items-center justify-between px-4">
        <span
          data-testid={`column-title-${slugify(title)}`}
          className="text-sm text-nowrap"
        >
          {title}
        </span>

        {!isInPreview && (
          <div className="flex items-center gap-1 bg-zinc-800 ml-4 p-0.5 rounded-md">
            <Button
              data-testid={`column-button-${id}-left`}
              className="bg-transparent w-8 h-6 p-0 rounded-md disabled:cursor-not-allowed"
              onClick={() => onChangeColumnPosition(id, 'left')}
              disabled={isFirstColumn}
            >
              <ArrowLeft className="size-4" />
            </Button>

            <Button
              data-testid={`column-button-${id}-right`}
              className="bg-transparent w-8 h-6 p-0 rounded-md disabled:cursor-not-allowed"
              onClick={() => onChangeColumnPosition(id, 'right')}
              disabled={isLastColumn}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        )}
      </div>

      <div
        onClick={handleOnColumnClick}
        className="h-full divide-y divide-zinc-500"
      >
        {isInPreview &&
          Array.from({ length: 4 }).map((_, index) => {
            return (
              <div
                key={index}
                className="h-10 w-full flex items-center justify-center px-4"
              >
                <span className="text-sm text-ellipsis text-nowrap">
                  {fakerPT_BR.person.fullName()}
                </span>
              </div>
            )
          })}
      </div>
    </div>
  )
}
