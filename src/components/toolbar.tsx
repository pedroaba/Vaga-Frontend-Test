'use client'

import { useBoard } from '@/hooks/use-board'

import { Switch } from './ui/switch'

export function Toolbar() {
  const { isInPreview, togglePreview } = useBoard()

  return (
    <div className="w-fit rounded h-10 items-center flex justify-center gap-4 px-6 absolute bottom-4 left-1/2 -translate-x-1/2 z-50 shadow bg-zinc-700">
      <span className="text-sm font-semibold text-zinc-200">Preview</span>

      <Switch onCheckedChange={togglePreview} checked={isInPreview} />
    </div>
  )
}
