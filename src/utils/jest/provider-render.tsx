import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import { Provider } from '@/app/provider'

export function renderWithProvider(children: ReactNode) {
  return render(<Provider>{children}</Provider>)
}
