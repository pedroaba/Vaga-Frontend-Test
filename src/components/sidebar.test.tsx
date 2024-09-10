import { fireEvent, screen } from '@testing-library/react'

import { renderWithProvider } from '@/utils/jest/provider-render'

import { Sidebar } from './sidebar'

describe('Sidebar Component', () => {
  beforeEach(() => renderWithProvider(<Sidebar />))

  it('should be able to see sidebar on screen', () => {
    const table = screen.getByTestId('sidebar')

    expect(table).toBeVisible()
  })

  it('should be able to change table title', () => {
    const input = screen.getByTestId('table-title-input')

    fireEvent.change(input, {
      target: {
        value: 'New Title',
      },
    })

    const inputWithNewTitle = screen.getByDisplayValue('New Title')
    expect(inputWithNewTitle).toBeTruthy()
    expect(inputWithNewTitle).toBeVisible()
  })
})
