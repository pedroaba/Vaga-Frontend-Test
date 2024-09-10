import { cleanup, fireEvent, screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/utils/jest/provider-render'

import { DynamicTable } from './dynamic-table'

describe('Dynamic Table Component', () => {
  beforeEach(() => renderWithProvider(<DynamicTable />))

  afterEach(() => cleanup())

  it('should be able to see table on screen', () => {
    const table = screen.getByTestId('dynamic-table')

    expect(table).toBeVisible()
  })

  it('should be able to add column', () => {
    const button = screen.getByTestId('add-column-button')

    fireEvent.click(button)

    const column = screen.getByText('Column 1')
    expect(column).toBeTruthy()
    expect(column).toBeVisible()
  })

  it('should be able to change column positions on table', () => {
    const button = screen.getByTestId('add-column-button')

    for (let i = 0; i < 2; i++) {
      fireEvent.click(button)
    }

    const column2 = screen.getByTestId('column-column-2')
    expect(column2).toBeTruthy()
    expect(column2).toBeVisible()

    let tableBody = screen.getByTestId('table-body')
    const columns = within(tableBody).getAllByText(/column/i)
    expect(columns).toHaveLength(3)

    for (let i = 0; i < 3; i++) {
      expect(columns[i].textContent).toEqual(`Column ${i + 1}`)
    }

    const changePosition = within(column2).getAllByRole('button')
    fireEvent.click(changePosition[0])

    tableBody = screen.getByTestId('table-body')
    let newColumnsOrder = within(tableBody).getAllByText(/column/i)

    expect(newColumnsOrder[0].textContent).toEqual('Column 2')
    expect(newColumnsOrder[1].textContent).toEqual('Column 1')

    fireEvent.click(changePosition[0])

    tableBody = screen.getByTestId('table-body')
    newColumnsOrder = within(tableBody).getAllByText(/column/i)

    expect(newColumnsOrder[0].textContent).toEqual('Column 2')
    expect(newColumnsOrder[1].textContent).toEqual('Column 1')
  })
})
