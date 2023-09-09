import { vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import useTheme from '../useTheme'

describe('useTheme', () => {
  const addEventListener = vi.fn()
  const removeEventListener = vi.fn()

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({
        matches: true,
        addEventListener,
        removeEventListener,
      })),
    })
  })

  test('Should return correct theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current).toBe('dark')
    expect(addEventListener).toHaveBeenCalled()
  })

  test('Should unmount event listener', () => {
    const { unmount } = renderHook(() => useTheme())
    unmount()
    expect(removeEventListener).toHaveBeenCalled()
  })
})
