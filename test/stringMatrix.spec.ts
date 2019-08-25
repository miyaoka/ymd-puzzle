import { left, right, up, down } from '~/utils/stringMatrix.ts'

describe('move matrix', () => {
  const mtx = ['0123', '4567', '89ab']

  test('left', () => {
    expect(left(mtx[0])).toBe('1230')
  })
  test('right', () => {
    expect(right(mtx[0])).toBe('3012')
  })
  test('up', () => {
    expect(up(mtx, 1)).toStrictEqual(['0523', '4967', '81ab'])
  })
  test('down', () => {
    expect(down(mtx, 1)).toStrictEqual(['0923', '4167', '85ab'])
  })
})
