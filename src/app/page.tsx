import { DynamicTable } from '@/components/dynamic-table'
import { Sidebar } from '@/components/sidebar'
import { Toolbar } from '@/components/toolbar'

export default function Home() {
  return (
    <main className="grid grid-cols-3 w-dvw max-sm:w-[800px] max-sm:flex items-center justify-center h-dvh bg-zinc-950">
      <div className="w-full h-full flex items-center justify-center col-span-2 relative">
        <DynamicTable />
        <Toolbar />
      </div>
      <div>
        <Sidebar />
      </div>
    </main>
  )
}
