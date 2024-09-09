import { DynamicTable } from '@/components/dynamic-table'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <main className="grid grid-cols-3 w-screen h-screen bg-zinc-950">
      <div className="w-full h-full flex items-center justify-center col-span-2">
        <DynamicTable />
      </div>
      <div>
        <Sidebar />
      </div>
    </main>
  )
}
