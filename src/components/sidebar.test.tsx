import { render, screen } from '@testing-library/react'

import { Sidebar } from './sidebar'

describe('Sidebar Component', () => {
  beforeEach(() => render(<Sidebar />))

  it('should be able to see sidebar on screen', () => {
    const table = screen.getByTestId('sidebar')

    expect(table).toBeVisible()
  })
})
