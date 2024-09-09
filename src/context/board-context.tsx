import { createContext, type ReactNode, useState } from 'react'

type Column = {
  id: string
  position: number
  title: string
}

type Table = {
  title: string
  columns: Column[]
}

interface IBoardContext {
  table: Table
  addNewColumn: (column: Column) => void
  changeOrderOfTableColumns: (columns: Column[]) => void
}

export const BoardContext = createContext({} as IBoardContext)

interface IBoardContextProviderProps {
  children: ReactNode
}

export function BoardContextProvider({ children }: IBoardContextProviderProps) {
  const [table, setTable] = useState<Table>({
    title: 'Dynamic table',
    columns: [
      {
        id: crypto.randomUUID(),
        position: 0,
        title: 'Column 1',
      },
    ],
  })

  function handleAddNewColumn(column: Column) {
    setTable({
      ...table,
      columns: [...table.columns, column],
    })
  }

  function handleChangePositionOfTableColumns(newColumnsOrder: Column[]) {
    setTable({
      ...table,
      columns: newColumnsOrder,
    })
  }

  return (
    <BoardContext.Provider
      value={{
        table,
        addNewColumn: handleAddNewColumn,
        changeOrderOfTableColumns: handleChangePositionOfTableColumns,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
