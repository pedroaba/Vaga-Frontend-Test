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
  onChangeTableTitle: (title: string) => void
  onChangeColumnTitle: (title: string, columnId: string) => void
  isInPreview: boolean
  selectedColumn: Column | null
  selectAColumn: (columnId: string) => void
  unselectAColumn: () => void
  togglePreview: () => void
  selectTable: () => void
  unselectTable: () => void
  isTableSelected: boolean
}

export const BoardContext = createContext({} as IBoardContext)

interface IBoardContextProviderProps {
  children: ReactNode
}

export function BoardContextProvider({ children }: IBoardContextProviderProps) {
  const [isInPreview, setIsInPreview] = useState<boolean>(false)
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null)
  const [isTableSelected, setIsTableSelected] = useState<boolean>(false)
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

  function onChangeTableTitle(title: string) {
    setTable({
      ...table,
      title,
    })
  }

  function togglePreview() {
    setIsInPreview((state) => !state)
  }

  function selectAColumn(columnId: string) {
    const column = table.columns.find((column) => column.id === columnId)
    if (!column) return

    setSelectedColumn(column)
  }

  function unselectAColumn() {
    setSelectedColumn(null)
  }

  function onChangeColumnTitle(title: string, columnId: string) {
    setTable({
      ...table,
      columns: table.columns.map((column) => {
        if (column.id === columnId) {
          column.title = title
        }

        return column
      }),
    })
  }

  function unselectTable() {
    setIsTableSelected(false)
  }

  function selectTable() {
    setIsTableSelected(true)
  }

  return (
    <BoardContext.Provider
      value={{
        table,
        isTableSelected,
        selectTable,
        unselectTable,
        onChangeColumnTitle,
        addNewColumn: handleAddNewColumn,
        changeOrderOfTableColumns: handleChangePositionOfTableColumns,
        onChangeTableTitle,
        isInPreview,
        togglePreview,
        selectedColumn,
        selectAColumn,
        unselectAColumn,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
