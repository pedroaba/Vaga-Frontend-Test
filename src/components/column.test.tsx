import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Column } from './column'

let handleChangeColumnPositionSpy: jest.Mock<
  Promise<string[]>,
  [columnId: string, dir: 'right' | 'left'],
  any
>

describe('Column Component', () => {
  beforeEach(() => {
    handleChangeColumnPositionSpy = jest.fn(
      (columnId: string, dir: 'right' | 'left') => {
        return Promise.resolve([columnId, dir])
      },
    )

    render(
      <Column
        id="column-id"
        isFirstColumn
        isLastColumn
        onChangeColumnPosition={handleChangeColumnPositionSpy}
        title="Coluna de teste"
      />,
    )
  })

  afterEach(() => cleanup())

  it('should be visible on screen', () => {
    const column = screen.queryByTestId('column-coluna-de-teste')

    expect(column).toBeVisible()
  })

  it('should be able to see title of column', () => {
    const title = screen.queryByTestId('column-title-coluna-de-teste')

    expect(title).toBeVisible()
    expect(title?.textContent).toBe('Coluna de teste')
  })

  it('should not be able to move column if is first or last column', () => {
    const rightButton = screen.getByTestId('column-button-column-id-right')
    const leftButton = screen.getByTestId('column-button-column-id-left')

    fireEvent.click(rightButton)
    fireEvent.click(leftButton)

    expect(handleChangeColumnPositionSpy).not.toHaveBeenCalled()
  })

  it('should be able to move column to right', () => {
    cleanup()
    render(
      <Column
        id="column-id"
        onChangeColumnPosition={handleChangeColumnPositionSpy}
        title="Coluna de teste"
      />,
    )

    const button = screen.getByTestId('column-button-column-id-right')
    fireEvent.click(button)

    expect(handleChangeColumnPositionSpy).toHaveBeenCalled()
    expect(handleChangeColumnPositionSpy).toHaveBeenCalledWith(
      'column-id',
      'right',
    )
  })

  it('should be able to move column to left', () => {
    cleanup()
    render(
      <Column
        id="column-id"
        onChangeColumnPosition={handleChangeColumnPositionSpy}
        title="Coluna de teste"
      />,
    )

    const button = screen.getByTestId('column-button-column-id-left')
    fireEvent.click(button)

    expect(handleChangeColumnPositionSpy).toHaveBeenCalled()
    expect(handleChangeColumnPositionSpy).toHaveBeenCalledWith(
      'column-id',
      'left',
    )
  })

  it('should not be able to move column to left when is available only to move to right', () => {
    cleanup()
    render(
      <Column
        id="column-id"
        isFirstColumn
        onChangeColumnPosition={handleChangeColumnPositionSpy}
        title="Coluna de teste"
      />,
    )

    const button = screen.getByTestId('column-button-column-id-left')
    fireEvent.click(button)

    expect(handleChangeColumnPositionSpy).not.toHaveBeenCalled()
  })

  it('should not be able to move column to right when is available only to move to left', () => {
    cleanup()
    render(
      <Column
        id="column-id"
        isLastColumn
        onChangeColumnPosition={handleChangeColumnPositionSpy}
        title="Coluna de teste"
      />,
    )

    const button = screen.getByTestId('column-button-column-id-right')
    fireEvent.click(button)

    expect(handleChangeColumnPositionSpy).not.toHaveBeenCalled()
  })
})
