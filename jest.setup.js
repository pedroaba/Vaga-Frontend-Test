// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import { randomUUID } from 'node:crypto'
window.crypto.randomUUID = randomUUID
