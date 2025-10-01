import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should sum three numbers', () => {
    const result = sum(1, 2, 3)
    const expected = 6
    expect(result).toBe(expected)
  })
})
