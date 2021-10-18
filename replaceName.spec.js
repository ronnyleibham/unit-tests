import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('replaces the name in a text', () => {
    const result = replaceName('Hello Jane', 'Jane', 'John')
    expect(result).toBe('Hello John')
  })
})
